import { drizzle } from "drizzle-orm/node-postgres";
import { peppers as pepperSchema } from "./schema.ts";
import { InferInsertModel } from "drizzle-orm";
import pg from "pg";
import { eq } from "drizzle-orm";

const { Pool } = pg;

export const db = drizzle({
  client: new Pool({
    connectionString: Deno.env.get("DATABASE_URL"),
    user: Deno.env.get("DATABASE_USER"),
    password: Deno.env.get("DATABASE_PASSWORD"),
  }),
  schema: { pepperSchema },
});

export async function getAllPeppers() {
  return await db.select().from(pepperSchema);
}

export async function insertPepper(
  pepperObj: InferInsertModel<typeof pepperSchema>
) {
  return await db.insert(pepperSchema).values({
    name: pepperObj.name,
    color: pepperObj.color,
    height: pepperObj.height,
    type: pepperObj.type,
    yield: pepperObj.yield,
  });
}

export async function getPepperById(id: number) {
  return await db
    .select()
    .from(pepperSchema)
    .where(eq(pepperSchema.id, id))
    .limit(1);
}
