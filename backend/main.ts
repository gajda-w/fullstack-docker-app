import { Hono } from "hono";
import { cors } from "hono/cors";
import { getAllPeppers, insertPepper } from "./src/db/db.ts";

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

Deno.serve(app.fetch);
