const axios = require("axios");
const config = require("../config");

module.exports = {
  name: "logo",
  run: async (bot, m, from) => {
    const text = m.message.conversation.split(" ").slice(1).join(" ");
    if (!text) return bot.sendMessage(from, { text: "Logo text likho!" });

    const api = `https://api.popcat.xyz/text?text=${encodeURIComponent(text)}`;

    await bot.sendMessage(from, { image: { url: api }, caption: `✨ *LOGO GENERATED*\n📢 ${config.channel}` });
  }
};
