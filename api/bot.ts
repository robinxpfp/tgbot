import dotenv from "dotenv";
import { Bot, webhookCallback } from "grammy";

dotenv.config();

const token = process.env.BOT_TOKEN;
if (!token) throw new Error("Falta BOT_TOKEN.");

const bot = new Bot(token);

bot.command("start", (ctx) => {
  ctx.reply("Welcome! Use the /id command to get your ID.");
});

bot.command("id", (ctx) => {
  const userId = ctx.from?.id;
  ctx.reply(`Your id is ${userId}.`);
});

export default webhookCallback(bot, "std/http");
