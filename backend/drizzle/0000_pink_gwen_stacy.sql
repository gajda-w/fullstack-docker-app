CREATE TABLE "peppers" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"type" text,
	"color" text,
	"height" text,
	"yield" text
);
--> statement-breakpoint
CREATE TABLE "tasks" (
	"id" serial PRIMARY KEY NOT NULL,
	"pepper_id" integer,
	"description" text,
	"date_created" timestamp DEFAULT now(),
	"is_complete" boolean
);
--> statement-breakpoint
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_pepper_id_fkey" FOREIGN KEY ("pepper_id") REFERENCES "public"."peppers"("id") ON DELETE no action ON UPDATE no action;