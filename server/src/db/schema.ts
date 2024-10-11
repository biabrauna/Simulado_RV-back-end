import { pgTable, text, timestamp, integer } from "drizzle-orm/pg-core";
// Importante para escabilidade no futuro => import { createId } from '@paralleldrive/cuid2', utilizada para gerar ids unicos

// Tabela de alunos
export const students = pgTable("students", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	email: text("email").unique().notNull(),
});

export const questions = pgTable("questions", {
	id: text("id").primaryKey(),
	statement: text("statement").notNull(),
	optionA: text("option_a"),
	optionB: text("option_b"),
	optionC: text("option_c"),
	optionD: text("option_d"),
	optionE: text("option_e"),
	optionR: text("option_rigth").notNull(),
	subject: text("subject").notNull(),
	difficulty: text("difficulty").notNull(),
});

// Tabela de provas
export const tests = pgTable("tests", {
	id: text("id").primaryKey(),
	title: text("title").notNull(),
	subjects: text("subjects").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const provas = pgTable("provas", {
	studentName: text("student_name"),
	provaId: text("prova_id").references(() => testQuestions.testId),
	// respostas sera um vetor de 1s(acertos) e 0s(erros) sequencialmente com a questao da prova realizada
	respostas: text("respostas"),
    nota: text("nota"),
})
// Tabela de questões das provas
export const testQuestions = pgTable("test_questions", {
	testId: text("tests_id")
		.references(() => tests.id)
		.notNull(),
	questionId: text("questions_id")
		.references(() => questions.id)
		.notNull(),
});

// Tabela de desempenho
export const performance = pgTable("performance", {
	id: text("id").primaryKey(),
	studentId: text("students_id")
		.references(() => students.id)
		.notNull(),
	testId: text("tests_id")
		.references(() => tests.id)
		.notNull(),
	score: text("score").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
