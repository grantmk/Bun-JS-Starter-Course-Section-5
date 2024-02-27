import { Elysia, t } from "elysia";
import pokemonRoutes from './routes/pokemon';

const app = new Elysia()
  .onAfterHandle((context) => {
    console.log(context.headers)
  })
  .get("/", () => Bun.file('./public/index.html'))
  .get('/id/:id', ({ params: { id } }) => id + " is a " + typeof (id), {
    params: t.Object({
      id: t.Numeric()
    })
  })
  .group('/pokemon', (app) => app.use(pokemonRoutes))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

