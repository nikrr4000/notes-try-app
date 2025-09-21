import { z } from 'zod';

// TODO: define required environment variables
const envSchema = z.object({});

export type Env = z.infer<typeof envSchema>;

export function parseEnv(env: NodeJS.ProcessEnv): Env {
  return envSchema.parse(env);
}
