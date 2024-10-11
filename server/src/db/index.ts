import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'
import { env } from '../env'
import { generateTests } from '../functions/generate-tests'

export const client = postgres(env.DATABASE_URL)
export const db = drizzle(client, { schema, logger: true})

generateTests({testId: '122', numQuestionsPerSubject: 2, avgDifficulty: 3})