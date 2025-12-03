const config = require("../config");

module.exports = {
  name: "ip",
  run: async (bot, m, from) => {
    const target = m.message.conversation.split(" ")[1] || "Unknown User";

    bot.sendMessage(from, {
      text: `🌐 *IP Lookup Complete*  
Target: ${target}  
IP: 192.168.1.1  
Location: Pakistan  
Status: Secure 🔐  

😂 Fake command, chill bro  

📢 ${config.channel}`
    });
  }
};
