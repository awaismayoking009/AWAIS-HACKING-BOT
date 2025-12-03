const connect = require("./lib/baileys");

async function start() {
  const bot = await connect();

  bot.ev.on("messages.upsert", async (msg) => {
    const m = msg.messages[0];
    if (!m.message) return;

    const from = m.key.remoteJid;
    const text = m.message.conversation || m.message.extendedTextMessage?.text || "";
    
    // ایک سادہ ریپلائی ٹیسٹ کے لیے
    if (text === "Hi") {
        await bot.sendMessage(from, { text: "Hello! Bot is working." });
    }
  });
}

start();
