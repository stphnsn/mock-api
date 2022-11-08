const pricesStub = require('../stubs/prices')

const routes = async (fastify, options) => {
  fastify.get('/api/v1/prices', async (request, reply) => {
    return reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send(pricesStub)
  })
}

module.exports = routes
