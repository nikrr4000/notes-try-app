import { Bot } from 'grammy';
import { loadEnv } from '../../../packages/shared/config';

export const bootstrap = () => {
  const envConfig = loadEnv();
  const bot = new Bot(envConfig.BOT_TOKEN);

  return {
    bot,
  };
};
