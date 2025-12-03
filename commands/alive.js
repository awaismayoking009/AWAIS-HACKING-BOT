const config = require("../config");

module.exports = {
  name: "alive",
  run: async (bot, m, from) => {
    bot.sendMessage(from, {
      text: `🔥 *${config.botName} Is Alive!*  
Powered By Awais Mayo  
📢 ${config.channel}`
    });
  }
};
