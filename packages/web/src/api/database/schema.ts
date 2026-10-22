import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

/**
 * Define your database schema here, then apply it with `bun run db:push`
 * (from packages/web). Re-export any generated schema from this file
 * (e.g. Better Auth's auth-schema.ts) so drizzle generates complete migrations.
 * Table patterns and conventions: skills/app/references/api.md
 */

/** Demandes envoyées depuis le formulaire de contact du site GLE. */
export const contactSubmissions = sqliteTable("contact_submissions", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  /** "devis" | "appel-offres" | "fournisseur" */
  subject: text("subject").notNull(),
  name: text("name").notNull(),
  organization: text("organization"),
  email: text("email").notNull(),
  phone: text("phone"),
  location: text("location"),
  message: text("message").notNull(),
  howHeard: text("how_heard"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
