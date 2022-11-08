const routes = async (fastify, options) => {
  fastify.get('/api/v1/maintenance', async (request, reply) => {
    let response
    const endDateString = 'Tue Jun 15 2022 10:59:33 GMT+0100'
    const endDate = new Date(endDateString)
    const now = new Date(Date.now())

    if (now > endDate) {
      response = {}
    } else {
      response = {
        attributes: {
          end_at: endDateString,
        },
      }
    }
    return reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({
        data: response,
      })
  })
}

module.exports = routes
