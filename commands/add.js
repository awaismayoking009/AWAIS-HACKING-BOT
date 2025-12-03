const config = require("../config");

module.exports = {
  name: "add",
  run: async (bot, m, from) => {
    const num = m.message.conversation.split(" ")[1];
    if (!num) return bot.sendMessage(from, { text: "Number likho!" });

    await bot.groupParticipantsUpdate(from, [`${num}@s.whatsapp.net`], "add");
    bot.sendMessage(from, { text: `➕ Added!\n📢 ${config.channel}` });
  }
};
