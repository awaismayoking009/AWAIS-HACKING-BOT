const config = require("../config");

module.exports = {
  name: "sticker",
  run: async (bot, m, from) => {
    const img = m.message.imageMessage;
    if (!img) return bot.sendMessage(from, { text: "Image bhejo + .sticker likho!" });

    const buffer = await bot.downloadMediaMessage(m);
    await bot.sendMessage(from, { sticker: buffer });

    bot.sendMessage(from, { text: `🧩 Sticker Ready!\n📢 ${config.channel}` });
  }
};
