import type { FastifyInstance } from 'fastify'
import { errorCodes } from 'fastify'

function handleErrors(app: FastifyInstance) {
  app.setErrorHandler(function (error, request, reply) {
    if (error instanceof errorCodes.FST_ERR_NOT_FOUND) {
      // Log error
      this.log.error(error)
      // Send error response
      reply.status(404).send({ ok: false, msg: 'Ressource introuvable' })
    }
    else {
      // fastify will use parent error handler to handle this
      reply.send(error)
    }
  })
}

export { handleErrors }
