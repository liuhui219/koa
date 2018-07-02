'use strict';

const os = require('os');
const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');

const main = serve(path.join(__dirname));
app.use(main);
// response
app.use(bodyParser()); 
app.use(async (ctx, next) => {
	
    if (ctx.request.path === '/') {
		console.log(ctx.request.origin)
        ctx.response.body = fs.createReadStream('./demos/index.html');
    } else {
        await next();
    }
});

app.use(async (ctx, next) => {
    if (ctx.request.path === '/test') {
		console.log(ctx.request.origin)
        ctx.response.body = data.toString();
    } else {
        await next();
    }
});

app.use(async (ctx, next) => {
    if (ctx.request.path === '/error') {
        ctx.response.body = 'ERROR page';
    } else {
        await next();
    }
}); 
app.listen(2000);