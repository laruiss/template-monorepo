import Fastify from 'fastify'

import { handleErrors } from './error-handler'

function createApp() {
  const fastify = Fastify({
    logger: true,
  })

  fastify.register(
    (instance, opts, done) => {
      instance.get('/version', async function handler(/* request, reply */) {
        return { version: '1.0.0' }
      })
      done()
    },
    { prefix: '/api' },
  )

  handleErrors(fastify)

  return fastify
}

export { createApp }
