const fs = require('fs')
const path = require('path')
const fastify = require('fastify')

const PORT = process.env.PORT || 8082
const app = fastify({
  http2: true,
  https: {
    allowHTTP1: true, // fallback support for HTTP1
    key: fs.readFileSync(path.join(__dirname, '..', 'ssl', 'fastify.key')),
    cert: fs.readFileSync(path.join(__dirname, '..', 'ssl', 'fastify.cert')),
  },
})

app.addContentTypeParser(
  'application/vnd.api+json',
  { parseAs: 'string' },
  function (req, body, done) {
    try {
      var json = JSON.parse(body)
      done(null, json)
    } catch (err) {
      err.statusCode = 400
      done(err, undefined)
    }
  }
)

// Middleware
app.register(require('fastify-cors'), {
  origin: true,
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,
})

// Register route plugins
app.register(require('./routes/configuration'))
app.register(require('./routes/maintenance'))

if (process.env.LOCAL) {
  // Run server in node
  app.listen(PORT, (err) => {
    if (err) {
      console.log(err)
      process.exit(1)
    }
    console.log(`Server listening on ${PORT}`)
  })
}

// Run as lambda on AWS
module.exports = app
