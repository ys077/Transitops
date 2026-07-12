import { z } from 'zod';
import dotenv from 'dotenv';
import path from 'path';

// Load .env file (if not already loaded by the runtime)
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const envSchema = z.object({
  DATABASE_URL: z.string().url({ message: "DATABASE_URL is required and must be a valid connection string" }),
  JWT_SECRET: z.string().min(1, { message: "JWT_SECRET is required" }),
  LLM_API_KEY: z.string().min(1, { message: "LLM_API_KEY is required" }),
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

export type Env = z.infer<typeof envSchema>;

let env: Env;

try {
  env = envSchema.parse(process.env);
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error('❌ Invalid or missing environment variables:');
    error.errors.forEach((err) => {
      console.error(`  - ${err.path.join('.')}: ${err.message}`);
    });
    // Throw a clear error and exit so it doesn't fail silently later
    process.exit(1);
  }
  throw error;
}

export { env };
