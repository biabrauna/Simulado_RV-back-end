import { createTest } from '@/functions/create-tests'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const createTestRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/tests',
    {
      schema: {
        body: z.object({
          title: z.string(),
          id: z.string(),
          subjects: z.string(),
        }),
      },
    },
    async request => {
      const { id, title, subjects } = request.body

      const { test } = await createTest({
        id,
        title,
        subjects,
      })

      return { testId: test.id }
    }
  )
}