import Fastify from 'fastify'

import { handleErrors } from './error-handler'

function createApp() {
  const fastify = Fastify({
    logger: true,
  })

  fastify.register(
    (instance, opts, done) => {
      instance.get('/version', async (/* request, reply */) => {
        return { version: '1.0.0' }
      })
      instance.get('/me', async (/* request, reply */) => {
        return { id: 1, username: 'jbond', email: 'james.bond@mi6.gov.uk', createAt: new Date('2023'), updatedAt: new Date() }
      })
      done()
    },
    { prefix: '/api/v1' },
  )

  handleErrors(fastify)

  return fastify
}

export { createApp }
