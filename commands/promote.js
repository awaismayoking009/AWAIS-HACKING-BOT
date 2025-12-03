const config = require("../config");

module.exports = {
  name: "promote",
  run: async (bot, m, from) => {
    const target = m.message.extendedTextMessage?.mentionedJid?.[0];
    if (!target) return bot.sendMessage(from, { text: "Tag someone!" });

    await bot.groupParticipantsUpdate(from, [target], "promote");
    bot.sendMessage(from, { text: `🎉 Promoted!\n📢 ${config.channel}` });
  }
};
