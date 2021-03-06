module.exports = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'Name of App here!',
    description: 'Description of App here',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'authorization',
      schema: 'bearer',
      in: 'header',
    },
  },
  security: [{ bearerAuth: [] }],
};
