const axios = require("axios");
const config = require("../config");

module.exports = {
  name: "yt",
  run: async (bot, m, from) => {
    const query = m.message.conversation.split(" ").slice(1).join(" ");
    if (!query) return bot.sendMessage(from, { text: "YouTube link paste karo!" });

    bot.sendMessage(from, { text: "⏳ Downloading video..." });

    const api = `https://api.dreaded.site/ytmp4?url=${query}`;

    const res = await axios.get(api);
    await bot.sendMessage(from, { video: { url: res.data.result }, caption: `🎥 *YOUTUBE VIDEO*\n📢 ${config.channel}` });
  }
};
