const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');

const fs = require('fs');
const path = require ('path');
const dirPath = path.join(__dirname, '../../data/tasks.json');

const app = new Koa();
app.use(cors({
    origin: "*"
}));
const router = new Router();
app.use(bodyParser());
app.use(logger());

const controller = require('./task/controllers/task');

router
    .get("/", async (ctx) => {
        try {
            ctx.body = "Koa API works great !";
        } catch (e) {
            console.log(e);
        }
    })
    .get("/task", async (ctx) => {
        try {
            const tasks = await controller.getTasks();
            ctx.body = {
                tasks
            }
            console.log("tasks", tasks);
        } catch (e) {
            console.log(e);
        }
    })
    .get("/task/:id", async (ctx) => {
        try {
            const id = ctx.params.id;
            const task = await controller.getTask(id);
            if(task) {
                ctx.body = {
                    task
                }
            } else {
                ctx.status = 404;
                ctx.body = `404 - Task with id ${id} not found`;
            }
        } catch (e) {
            console.log(e);
        }
    })
    .post("/task", async (ctx) => {
        try {
            const task = ctx.request.body;
            console.log("task", task);
            const result = await controller.createTask(task);
            ctx.body = {
                result,
            };
            console.log("result", result);
        } catch (e) {
            console.log(e);
        }
    })
    .put("/task/:id", async (ctx) => {
        try {
            const id = ctx.params.id;
            const updatedTask = ctx.request.body;
            const task = await controller.updateTask(id, updatedTask);
            ctx.body = {
                task,
            };
            console.log("task", task);
        } catch (e) {
            console.log(e);
        }
    })
    .delete("/task/:id", async (ctx) => {
        try {
            const id = ctx.params.id;
            const deletedTask = await controller.deleteTask(id);
            ctx.body = {
                deletedTask
            };
            console.log("deletedTask", deletedTask);
        } catch (e) {
            console.log(e);
        }
    });

app.use((ctx, next) => {
    ctx.body;
    next();
});


app.use(router.routes())
    .use(router.allowedMethods());

const PORT = 3000;

app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })
    .on("error", err => {
        console.log(err);
    })