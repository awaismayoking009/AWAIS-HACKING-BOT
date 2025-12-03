const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason
} = require("@whiskeysockets/baileys");
const pino = require("pino");
const qrcode = require("qrcode-terminal");

async function connect() {
  const { state, saveCreds } = await useMultiFileAuthState("./auth"); 

  const sock = makeWASocket({
    logger: pino({ level: "silent" }),
    browser: ["Chrome (Linux)", "", ""],
    auth: state
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect, qr } = update;
    
    if (qr) {
      qrcode.generate(qr, { small: true }); // <--- یہ QR کوڈ کی تصویر بنائے گا
    }

    if (connection === "close") {
      const shouldReconnect = lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut;
      if (shouldReconnect) {
        connect();
      }
    } else if (connection === "open") {
      console.log("Bot connected successfully!");
    }
  });
  
  return sock;
}

module.exports = connect;
