const config = require("../config");

module.exports = {
  name: "kick",
  run: async (bot, m, from) => {
    const target = m.message.extendedTextMessage?.mentionedJid?.[0];
    if (!target) return bot.sendMessage(from, { text: "Tag kisi ko bhi!" });

    await bot.groupParticipantsUpdate(from, [target], "remove");
    bot.sendMessage(from, { text: `🚫 Removed!\n📢 ${config.channel}` });
  }
};
