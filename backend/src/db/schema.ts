import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const peppers = pgTable("peppers", {
  id: serial().primaryKey().notNull(),
  name: text(),
  type: text(),
  color: text(),
  height: text(),
  yield: text(),
});
