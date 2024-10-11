import { questions, testQuestions, tests } from '../db/schema';
import { eq, and, gt, lt } from 'drizzle-orm'; // Usar operadores para filtros adicionais
import { db } from "../db";

export async function generateTests(_Object: { testId: string; numQuestionsPerSubject: number; avgDifficulty: number; }){
  try {
    // Buscar o teste com o ID fornecido
    const result = await db.select().from(tests).where(eq(tests.id, _Object.testId));
    
    if (!result.length) {
      console.log(`Test with ID ${_Object.testId} not found`);
      return;
    }

    // Separar os assuntos do teste
    const subjectsArray = result[0].subjects.split(', ');

    // Inicializar array para armazenar as questões selecionadas
    const qadd = [];

    // Verificar se já existem questões associadas a esse teste
    const existingTestQuestions = await db.select().from(testQuestions).where(eq(testQuestions.testId, _Object.testId));
    
    if (existingTestQuestions.length > 0) {
      console.log("Questoes ja estao associadas a esse teste");
      return;
    }

    // Loop por cada assunto
    for (const subject of subjectsArray) {
      // Buscar questões filtradas por assunto e dificuldade
      const questionsForSubject = await db.select()
        .from(questions)
        .where(and(
          eq(questions.subject, subject), // Filtro pelo assunto
          gt(questions.difficulty, String(_Object.avgDifficulty - 1)), // Dificuldade média ajustada
          lt(questions.difficulty, String(_Object.avgDifficulty + 1))
        ))
        .limit(_Object.numQuestionsPerSubject); // Limitar ao número de questões por assunto

      // Adicionar questões ao array de inserção
      for (const question of questionsForSubject) {
        qadd.push({
          testId: _Object.testId,
          questionId: question.id
        });
      }
    }

    // Inserir questões no banco de dados
    if (qadd.length > 0) {
      await db.insert(testQuestions).values(qadd);
      console.log(`${qadd.length} questoes foram adicionadas ao teste ${_Object.testId}`);
      console.log(qadd)
    } else {
      console.log("Nenhuma questão foi selecionada para este teste.");
    }
  } catch (error) {
    console.log('Error generating test questions:', error);
  }
}
