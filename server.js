const jsonServer = require('json-sever');
const sever = jsonServer.create();
const router = jsonServer.router('users.js');
const middlewares = jsonServer.defaults();
const post = process.env.POST || 3000;

server.use(middlewares);
server.use(router);

server.listen(post);
