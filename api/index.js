import Koa from 'koa';

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello World from Koa.js!';
});

app.listen(3000, () => console.log('Listening on 3000'));
