const axios = require("axios");
const config = require("../config");

module.exports = {
  name: "ask",
  run: async (bot, m, from) => {
    const q = m.message.conversation.split(" ").slice(1).join(" ");
    if (!q) return bot.sendMessage(from, { text: "Kya poochna hai?" });

    const api = `https://api.dreaded.site/gpt?prompt=${encodeURIComponent(q)}`;
    const res = await axios.get(api);

    await bot.sendMessage(from, { text: `🤖 *AI Response:*  
${res.data.result}

📢 ${config.channel}` });
  }
};
