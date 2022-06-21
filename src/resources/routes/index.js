const HomeRouter = require('./home');
const ApiRouter = require('./api/v1/index.js')

function route(app) {
  app.use('/', HomeRouter);

  app.use('/api/v1', ApiRouter);
}

module.exports = route; // export thằng route đó ra ngoài 