const handsetConfigStub = require('../stubs/configuration')

const routes = async (fastify, options) => {
  fastify.get('/api/v1/configuration/handset', async (request, reply) => {
    setTimeout(() => {
      return reply
        .code(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send(handsetConfigStub)
    }, 2000)
  })
}

module.exports = routes
