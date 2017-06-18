var Koa = require('koa');
var app = new Koa();
var Promise = require('bluebird');
var readFile = Promise.promisify(require('fs').readFile);

app.use(async function(ctx, next) {
  var file = await readFile(__dirname + '/hello.txt');
  ctx.body = file.toString();
  await next();
  ctx.body += ': The next generation framework for nodejs';
});

app.use(async function(ctx, next) {
  ctx.body += 'Koa';
  await next();
});


app.listen(3000);