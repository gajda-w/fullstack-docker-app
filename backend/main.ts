import { Hono } from "hono";
import { cors } from "hono/cors";
import { getAllPeppers, getPepperById, insertPepper } from "./src/db/db.ts";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: "*",
  })
);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/peppers/:id", async (c) => {
  const id = Number(c.req.param("id"));
  if (isNaN(id)) return c.json({ error: "Invalid ID" }, 400);

  const pepper = await getPepperById(id);
  if (!pepper.length) return c.json({ error: "Pepper not found" }, 404);

  return c.json(pepper[0]);
});

app.get("/peppers", async (c) => {
  const peppers = await getAllPeppers();
  return c.json(peppers);
});

app.post("/peppers", async (ctx) => {
  try {
    const body = await ctx.req.json();

    if (
      !body.name ||
      !body.type ||
      !body.color ||
      !body.height ||
      !body.yield
    ) {
      return ctx.json({ error: "Missing required fields" }, 400);
    }

    const newPepper = await insertPepper(body);
    return ctx.json(newPepper, 201);
  } catch (error) {
    return ctx.json({ error: error.message }, 500);
  }
});

Deno.serve({ port: 4000 }, app.fetch);
