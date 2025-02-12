import { Hono } from "hono";
import { cors } from "hono/cors";

const peppers = [
  {
    id: 1,
    name: "Habanero",
    type: "Hot",
    color: "Orange",
    height: "60 cm",
    yield: "200 fruits",
  },
  {
    id: 2,
    name: "Cayenne",
    type: "Hot",
    color: "Red",
    height: "75 cm",
    yield: "150 fruits",
  },
  {
    id: 3,
    name: "Jalapeno",
    type: "Medium",
    color: "Green",
    height: "80 cm",
    yield: "100 fruits",
  },
];

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

app.get("/peppers", (c) => {
  return c.json(peppers);
});

Deno.serve(app.fetch, { port: 4000 });
