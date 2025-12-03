const config = require("../config");

module.exports = {
  name: "owner",
  run: async (bot, m, from) => {
    bot.sendMessage(from, {
      text: `👑 *OWNER NUMBER:*  
wa.me/${config.owner}

📢 Channel: ${config.channel}`
    });
  }
};
