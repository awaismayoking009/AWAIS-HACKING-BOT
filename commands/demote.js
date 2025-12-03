const config = require("../config");

module.exports = {
  name: "demote",
  run: async (bot, m, from) => {
    const target = m.message.extendedTextMessage?.mentionedJid?.[0];
    if (!target) return bot.sendMessage(from, { text: "Tag someone!" });

    await bot.groupParticipantsUpdate(from, [target], "demote");
    bot.sendMessage(from, { text: `⬇️ Demoted!\n📢 ${config.channel}` });
  }
};
