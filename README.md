# Mock API Server

Simple Node.js server implemented with [Fastify](https://www.fastify.io).

The mock server is useful when a new data-driven feature has to be implemented for the app but the back-end isn't ready yet. Or when you want to receive a given server response without the correct request.

You can start the mock server locally with `yarn start`. It will start on [`http://localhost:8082`](http://localhost:8082).

Modifying the code to add new routes or modify the response for an existing one is very easy. Just find the feed to modify on the `stubs` folder and make the corresponding changes on the content, which is no more than a big plain vanilla JavaScript object. To create a new route/feed check the `routes` supported and add a new one in case you need it.

## Setup and running

```bash
yarn
yarn start
```

And the server will be ready to receive HTTP requests on [`http://localhost:8082`](http://localhost:8082).
