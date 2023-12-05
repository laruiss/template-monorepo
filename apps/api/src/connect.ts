import { FastifyInstance } from 'fastify'

import prismaPlugin from './plugins/prisma'

function connectToPostgres(app: FastifyInstance) {
  app.register(prismaPlugin)
}

export { connectToPostgres }
