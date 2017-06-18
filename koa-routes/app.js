var Koa = require('koa');
var app = new Koa();
var router = require('koa-router')();


router.get('/', async (ctx, next) => {
  try {
    ctx.body = Number(1).toUpperCase();
  } catch(e) {
    ctx.body = {error: `Error: ${e.message}`};
    ctx.status = e.status || 500;
  }
});

app.use(router.routes());

app.listen(3000, _ => console.log('server is listening on port 3000'));