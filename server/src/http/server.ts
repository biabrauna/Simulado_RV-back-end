import fastify from "fastify";
import dotenv from "dotenv";
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod";
import { createTest } from "../functions/create-tests";
import z from "zod";
import fastifyCors from '@fastify/cors'
import { createTestRoute } from "./routes/create-test";
import { getInfosRoute } from "./routes/get-info";
// Carregar as variáveis do .env
dotenv.config();

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, { origin: '*' })

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createTestRoute)
app.register(getInfosRoute)

app
	.listen({
		port: 3333,
	})
	.then(() => {
		console.log("HTTP server running!");
	});
