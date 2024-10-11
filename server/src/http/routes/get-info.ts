import { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { getInfos } from '@/functions/get-infos'


export const getInfosRoute: FastifyPluginAsyncZod = async app => {
    app.get('/infos', {}, async () => {
        const {infos} = await getInfos()

        return { infos }
    })
}