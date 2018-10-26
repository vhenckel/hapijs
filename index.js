'use strict'

const Hapi = require('hapi')

// Create a server with a host and port
const server = Hapi.server({
    host:'localhost',
    port:8000
})

// Add the route
server.route({
    method:'GET',
    path:'/hello',
    handler: (request, reply) => {
        return 'hello world'
    }
})

server.route({
  method: 'GET',
  path: '/user/{name?}',
  handler: (request, reply) => {
    if (request.params.name) {
      return `Hello ${request.params.name}`
    }
    return 'Hello user without name!'
  }
})

server.route({
  method: 'GET',
  path: '/oi',
  handler: (request, reply) => {
    return 'Olá!'
  }
})
// Start the server
const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();