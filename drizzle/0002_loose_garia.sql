ALTER TABLE "conversations" RENAME COLUMN "scenario" TO "title";--> statement-breakpoint
ALTER TABLE "conversations" ALTER COLUMN "created_at" SET NOT NULL;