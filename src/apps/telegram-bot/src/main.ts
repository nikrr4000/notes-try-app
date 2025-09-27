import { bootstrap } from "./bootstrap";
import { scheduler } from "node:timers/promises";

(async () => {
  const { bot } = bootstrap();

  bot.on(":voice", async (ctx) => {
    const fileData = await ctx.getFile();
  });

  await scheduler.wait(500);
  console.log("Bot started on long polling mode");
  await bot.start();
})();
