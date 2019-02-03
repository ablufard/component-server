"use strict";

import Koa from "koa";
// const routes = require('./router');
// const allowedMethods = require('./router');
const serve = require("koa-static");
const Logger = require("koa-logger");
const app = new Koa();
const Router = require("koa-router");
const router = new Router();
import WebRequest from "./components/web-request";
import readSVC from "./modules/readSVC";
import Scenario from './components/scenario';
// import test from './router'
// Отвечаем миру на GET запросы
app.use(Logger());

router.get("/", ctx => {
  ctx.body = "Hello, World!\n";
  let webReq = new WebRequest("192.168.10.25");
  webReq.makeRequest();
});

// Отвечаем на имя на GET запросы. :name здесь - это часть URL, и является аргументом

router.post("/svc/:filename", async ctx => {  
  const json = await readSVC(`svc/${ctx.params.filename}.json`);
  let scenario = new Scenario(json)
  scenario.run();
  //ctx.body = `Good work, our data: ${JSON.stringify(json)}`
});
function routes() {
  return router.routes();
}
function allowedMethods() {
  return router.allowedMethods();
}
app.use(serve("src/public"));
// Логгер
// Добавим все роуты. Второй middleware отвечает на OPTIONS запросы.
app.use(routes()).use(allowedMethods());
app.listen(3000, "localhost", () => {
  console.log("Server listening on 3000");
  // test()
});
