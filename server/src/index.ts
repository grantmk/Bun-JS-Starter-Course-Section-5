import { Elysia, t, Context } from "elysia";
import { authenticate } from "./middlewares/auth";

const app = new Elysia()
  .get("/", () => Bun.file('./public/index.html'))
  .get('/id/:id', ({ params: { id } }) => id + " is a " + typeof (id), {
    params: t.Object({
      id: t.Numeric()
    })
  })
  .post('/create', (request) => {
    console.log(request.body)
    console.log(request.headers["x-access"])
    return request.body
  }, {
    beforeHandle: (context) => authenticate(context),
    body: t.Object({
      name: t.String(),
      level: t.Numeric()
    })
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

