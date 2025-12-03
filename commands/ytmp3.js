const axios = require("axios");
const config = require("../config");

module.exports = {
  name: "ytmp3",
  run: async (bot, m, from) => {
    const link = m.message.conversation.split(" ").slice(1).join(" ");
    if (!link) return bot.sendMessage(from, { text: "YouTube link do!" });

    const api = `https://api.dreaded.site/ytmp3?url=${link}`;
    const res = await axios.get(api);

    await bot.sendMessage(from, { audio: { url: res.data.result }, mimetype: "audio/mpeg", caption: `🎵 *YOUTUBE AUDIO*\n📢 ${config.channel}` });
  }
};
