const config = require("../config");

module.exports = {
  name: "hack",
  run: async (bot, m, from) => {
    bot.sendMessage(from, {
      text: `⚠️ Hacking Target...  
😂 Just For Fun Bro  
📢 ${config.channel}`
    });
  }
};
