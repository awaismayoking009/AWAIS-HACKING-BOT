const config = require("../config");

module.exports = {
  name: "help",
  run: async (bot, m, from) => {
    bot.sendMessage(from, {
      text: `✨ *${config.botName} MENU* ✨

🟢 Basic Commands
.alive
.owner
.hack
.fun
.logo text

🔵 Group Commands
.kick
.add
.promote
.demote

🟣 AI / Tools
.ask
.ss
.sticker

+ 50 More Commands Included!

📢 Channel: ${config.channel}`
    });
  }
};
