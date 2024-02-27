import { authenticate } from "../middlewares/auth";

import { Elysia, t } from "elysia";
import { createPokemon } from '../controllers/pokemon';

const pokemonRoutes = new Elysia({ prefix: '' })
  .guard({ beforeHandle: authenticate },
    (app) =>
      app
        .post('/create', ({ body }) => createPokemon(body.name, body.level),
          {
            beforeHandle: authenticate,
            body: t.Object({
              name: t.String(),
              level: t.Numeric(),
            })
          })
  )

export default pokemonRoutes;