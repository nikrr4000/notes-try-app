import { CONFIG_KEYS } from './schema';
import type { ConfigSchema } from './schema';

export const loadEnv = (): ConfigSchema => {
  const configKeys = Object.keys(CONFIG_KEYS).filter((k) =>
    isNaN(Number(k))
  ) as (keyof typeof CONFIG_KEYS)[];
  const envObj = configKeys.reduce((acc, key) => {
    const value = process.env[key];
    if (!value) {
      throw new Error(`Missing env variable: ${key}`);
    }
    return { ...acc, [key]: value };
  }, {} as ConfigSchema);

  return envObj;
};
