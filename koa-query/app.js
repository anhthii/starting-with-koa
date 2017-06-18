var Koa = require('koa');
var app = new Koa();


app.use(ctx => {
  ctx.body = ctx.query;
});


app.listen(3000);