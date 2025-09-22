export enum CONFIG_KEYS {
  BOT_TOKEN,
  NODE_ENV,
}
export type ConfigSchema = {
  BOT_TOKEN: string;
  NODE_ENV: 'development' | 'production' | 'test';
};
