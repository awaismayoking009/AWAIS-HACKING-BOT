const connect = require("./lib/baileys");
const { loadCommands } = require("./lib/router");
const config = require("./config");

async function start() {
  const bot = await connect();
  const commands = loadCommands();

  bot.ev.on("messages.upsert", async (msg) => {
    const m = msg.messages[0];
    if (!m.message) return;

    const from = m.key.remoteJid;
    const text = m.message.conversation || m.message.extendedTextMessage?.text || "";
    if (!text.startsWith(config.prefix)) return;

    const cmd = text.slice(1).split(" ")[0].toLowerCase();

    if (commands[cmd]) {
      commands[cmd].run(bot, m, from);
    }
  });

  bot.ev.on("connection.update", (u) => {
    if (u.connection === "close") start();
  });
}

start();
