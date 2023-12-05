import { FastifyInstance } from 'fastify'

import prismaPlugin from './plugins/prisma'

function connectToPostgres(fastify: FastifyInstance) {
  fastify.register(prismaPlugin)
}

export { connectToPostgres }
