const config = require("../config");

module.exports = {
  name: "fun",
  run: async (bot, m, from) => {
    const jokes = [
      "Bhai tension na le, bot chal raha hai 😂",
      "Kal se exercise start… Lekin konsi saal ki kal se? 😭",
      "Aaj mood off nahi, bas internet slow hai 💀",
      "Tu great banda hai bro, bas thoda pagal hai 😹",
      "Bot keh raha: Battery low, mood high 😎"
    ];

    const joke = jokes[Math.floor(Math.random() * jokes.length)];

    bot.sendMessage(from, {
      text: `😂 *FUN MESSAGE:*\n${joke}\n\n📢 ${config.channel}`
    });
  }
};
