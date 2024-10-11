import { db, client } from ".";
import {
	performance,
	questions,
	tests,
	students,
	testQuestions,
} from "./schema";
import dayjs from "dayjs";

export async function seed() {
	await db.delete(performance);
	await db.delete(testQuestions);
	await db.delete(tests);
	await db.delete(questions);
	await db.delete(students);

	const studentsArray = await db
		.insert(students)
		.values([
			{
				id: "12403933",
				name: "Julia Arruda Nogueira",
				email: "julia@gmail.com",
			},
			{
				id: "12403482",
				name: "Beatriz Arruda Nogueira",
				email: "bia@gmail.com",
			},
		])
		.returning();

	const questionsArray = await db
		.insert(questions)
		.values([
			{
				id: "1",
				statement:
					"(ITA) A imagem de um objeto formada por um espelho concavo mede metade do tamanho do objeto. Se este e deslocado de uma distancia de 15 cm em direcao ao espelho, o tamanho da imagem tera o dobrodo tamanho do objeto. Estime a distancia focal do espelho e assinale a alternativa correspondente.",
				subject: "matematica",
				difficulty: "3",
				optionA: "40 cm",
				optionB: "30 cm",
				optionC: "20 cm",
				optionD: "10 cm",
				optionE: "5 cm",
				optionR: "10 cm",
			},
			{
				id: "2",
				statement:
					"(ITA) A respeito de Adelaide, uma das personagens femininas de Os ratos, de Dyonélio Machado, é correto afirmar que",
				subject: "portugues",
				difficulty: "2",
				optionA:
					"ela é frágil e ingênua, características que agradam ao protagonista, pois alimentam seu amor por ela. ",
				optionB:
					"ela é financeiramente independente do marido e protagonista do romance.",
				optionC:
					"sua fraqueza e ingenuidade servem para que o protagonista justifique seus próprios fracassos. ",
				optionD:
					"ela se sente inferiorizada diante de outras mulheres presentes no romance. ",
				optionE:
					"Adelaide não exige do marido luxos que ele não conseguiria entregar, apenas o suficiente para alimentar a família. ",
				optionR:
					"ela se sente inferiorizada diante de outras mulheres presentes no romance. ",
			},
			{
				id: "3",
				statement:
					"O termo “Although”, destacado em itálico sublinhado no excerto do segundo parágrafo:“Although different, these peoples seem to have one common goal”, expressa ideia de",
				subject: "ingles",
				difficulty: "1",
				optionA: "dessemelhança.",
				optionB: "alternancia.",
				optionC: "similaridade.",
				optionD: "contraste.",
				optionE: "decorrencia.",
				optionR: "contraste.",
			},
			{
				id: "4",
				statement:
					"Em uma titulação, 100 mL de uma solução de um ácido monoprótico fraco, cuja constante de ionização é igual a 10−9, são neutralizados com 25 mL de uma solução 0,5 mol L−1 de hidróxido de sódio. Assinale a opção que apresenta o pH no ponto de equivalência da titulação. ",
				subject: "quimica",
				difficulty: "4",
				optionA: "9,0",
				optionB: "9,5",
				optionC: "10,0",
				optionD: "10,5",
				optionE: "11,0",
				optionR: "9,5",
			},
			{
				id: "5",
				statement:
					"Considere um recipiente tubular fino, com area transversal constante, que contem dois lıquidos imissıveis A e B. As hastes verticais deste recipiente distam 20 cm uma da outra (L = 20 cm). Quando o recipiente esta em repouso, o lıquido A atinge uma altura de 80 cm em relacao `a linha de separacao dos lıquidos. Quando o recipiente e colocado em movimento retilıneo uniformemente variado, a altura de A com relacao `a linha de separacao dos lıquidos passa a ser H = 76 cm, conforme mostra a figura. Considerando-se que o sistema parta do repouso, a distancia percorrida pelo recipiente apos um intervalo de 3,0 s e",
				subject: "fisica",
				difficulty: "2",
				optionA: "2,4 m.",
				optionB: "4,6 m.",
				optionC: "9,0 m.",
				optionD: "1,3x10 m.",
				optionE: "1,8x10 m.",
				optionR: "2,4 m.",
			},
				{
					id: "12",
					statement: "Qual o elemento químico com símbolo 'O'?",
					difficulty: "2",
					subject: "quimica",
					optionA: "Oxigênio",
					optionB: "Ouro",
					optionC: "Prata",
					optionD: "Níquel",
					optionE: "Chumbo",
					optionR: "Oxigênio",
				},
				{
					id: "23",
					statement: "Quem desenvolveu a tabela periódica?",
					difficulty: "3",
					subject: "quimica",
					optionA: "Isaac Newton",
					optionB: "Albert Einstein",
					optionC: "Dmitri Mendeleev",
					optionD: "Marie Curie",
					optionE: "Niels Bohr",
					optionR: "Dmitri Mendeleev",
				},
				{
					id: "135",
					statement: "Qual é o ácido presente no vinagre?",
					difficulty: "2",
					subject: "quimica",
					optionA: "Ácido acético",
					optionB: "Ácido sulfúrico",
					optionC: "Ácido clorídrico",
					optionD: "Ácido nítrico",
					optionE: "Ácido carbônico",
					optionR: "Ácido acético",
				},
				{
					id: "42",
					statement: "Qual a fórmula química da água?",
					difficulty: "1",
					subject: "quimica",
					optionA: "H2O",
					optionB: "CO2",
					optionC: "O2",
					optionD: "CH4",
					optionE: "NaCl",
					optionR: "H2O",
				},
				{
					id: "75",
					statement: "O que é um cátion?",
					difficulty: "3",
					subject: "quimica",
					optionA: "Um íon com carga positiva",
					optionB: "Um íon com carga negativa",
					optionC: "Um átomo neutro",
					optionD: "Uma molécula orgânica",
					optionE: "Um composto covalente",
					optionR: "Um íon com carga positiva",
				},
				{
					id: "6",
					statement: "Qual a capital do Brasil?",
					difficulty: "3",
					subject: "geografia",
					optionA: "Brasília",
					optionB: "Rio de Janeiro",
					optionC: "Salvador",
					optionD: "Recife",
					optionE: "Porto Alegre",
					optionR: "Brasília",
				},
				{
					id: "7",
					statement: "Qual a fórmula química do sal de cozinha?",
					difficulty: "2",
					subject: "quimica",
					optionA: "NaCl",
					optionB: "KCl",
					optionC: "CaCO3",
					optionD: "H2O",
					optionE: "C6H12O6",
					optionR: "NaCl",
				},
				{
					id: "8",
					statement: "Qual a unidade de medida de massa no SI?",
					difficulty: "1",
					subject: "fisica",
					optionA: "Quilograma",
					optionB: "Litro",
					optionC: "Joule",
					optionD: "Newton",
					optionE: "Metro",
					optionR: "Quilograma",
				},
				{
					id: "9",
					statement: "O que é uma ligação covalente?",
					difficulty: "3",
					subject: "quimica",
					optionA: "Compartilhamento de elétrons entre átomos",
					optionB: "Transferência de prótons",
					optionC: "Perda de elétrons",
					optionD: "Ganho de elétrons",
					optionE: "Ligação entre moléculas polares",
					optionR: "Compartilhamento de elétrons entre átomos",
				},
				{
					id: "10",
					statement: "Qual o principal gás responsável pelo efeito estufa?",
					difficulty: "3",
					subject: "quimica",
					optionA: "Dióxido de carbono",
					optionB: "Oxigênio",
					optionC: "Nitrogênio",
					optionD: "Ozônio",
					optionE: "Hidrogênio",
					optionR: "Dióxido de carbono",
				},
				{
					id: "11",
					statement: "Qual é o metal líquido em temperatura ambiente?",
					difficulty: "2",
					subject: "quimica",
					optionA: "Mercúrio",
					optionB: "Prata",
					optionC: "Ouro",
					optionD: "Cobre",
					optionE: "Ferro",
					optionR: "Mercúrio",
				},
				{
					id: "124",
					statement: "O que define o número atômico de um elemento?",
					difficulty: "2",
					subject: "quimica",
					optionA: "Número de prótons",
					optionB: "Número de nêutrons",
					optionC: "Número de elétrons",
					optionD: "Massa atômica",
					optionE: "Número de ligações químicas",
					optionR: "Número de prótons",
				},
				{
					id: "13",
					statement: "Qual é o símbolo químico do Ferro?",
					difficulty: "1",
					subject: "quimica",
					optionA: "Fe",
					optionB: "F",
					optionC: "Pb",
					optionD: "Sn",
					optionE: "Ni",
					optionR: "Fe",
				},
				{
					id: "14",
					statement: "Qual é a fórmula do gás ozônio?",
					difficulty: "3",
					subject: "quimica",
					optionA: "O3",
					optionB: "O2",
					optionC: "CO2",
					optionD: "H2O",
					optionE: "CH4",
					optionR: "O3",
				},
				{
					id: "15",
					statement: "O que é uma base segundo a teoria de Arrhenius?",
					difficulty: "4",
					subject: "quimica",
					optionA: "Substância que libera íons OH- em solução",
					optionB: "Substância que libera íons H+ em solução",
					optionC: "Molécula que compartilha elétrons",
					optionD: "Substância que doa prótons",
					optionE: "Substância neutra",
					optionR: "Substância que libera íons OH- em solução",
				}
			
		])
		.returning();

	const startOfWeek = dayjs().startOf("week");

		const testsArray = await db.insert(tests).values([
				{
					id: "128",
					title: "Simulado 1 - Turma ITA",
					subjects: "matematica, fisica, quimica",
					createdAt: startOfWeek.toDate(),
				},
				{
					id: "123",
					title: "Simulado 2 - Vestibular",
					subjects: "fisica, quimica, portugues",
					createdAt: startOfWeek.toDate(),
				},
				{
					id: "124",
					title: "Simulado 3 - Preparação ENEM",
					subjects: "matematica, fisica, ingles",
					createdAt: startOfWeek.toDate(),
				},
				{
					id: "125",
					title: "Simulado 4 - Revisão ITA",
					subjects: "quimica, matematica, fisica",
					createdAt: startOfWeek.toDate(),
				},
				{
					id: "126",
					title: "Simulado 5 - Aula Preparatória",
					subjects: "portugues, ingles, quimica",
					createdAt: startOfWeek.toDate(),
				},
				{
					id: "127",
					title: "Simulado 6 - Concurso Técnico",
					subjects: "fisica, matematica, ingles",
					createdAt: startOfWeek.toDate(),
				},
			{
				id: "122",
				title: "S0 Turma ITA",
				subjects: 'matematica, fisica, quimica',
				createdAt: startOfWeek.toDate(),
			}
		]).returning()

		const testQArray = await db.insert(testQuestions).values([
			{
				testId: testsArray[0].id,
				questionId: questionsArray[0].id,
			},
			{
				testId: testsArray[0].id,
				questionId: questionsArray[1].id,
			},
			{
				testId: testsArray[0].id,
				questionId: questionsArray[2].id,
			},
			{
				testId: testsArray[0].id,
				questionId: questionsArray[3].id,
			},
			{
				testId: testsArray[0].id,
				questionId: questionsArray[4].id,
			}
		]).returning()

	}

seed().finally(() => {
	console.log('🌱 Database seeded successfully!')
	client.end();
});
