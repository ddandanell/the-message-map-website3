import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  console.warn("Warning: DATABASE_URL not set. Database operations will not work.");
  console.warn("This is only needed for 'npm run db:push' command.");
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "postgresql://placeholder",
  },
});
