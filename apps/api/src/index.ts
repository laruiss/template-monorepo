import process from 'node:process'

import config from './config.js'
import { createApp } from './app.js'
import { connectToPostgres } from './connect.js'

start()

async function start() {
  const fastify = createApp()

  try {
    await connectToPostgres(fastify)
    await fastify.listen({ port: config.port })
  }
  catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
