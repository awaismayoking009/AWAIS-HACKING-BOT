const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason
} = require("@whiskeysockets/baileys");
const pino = require("pino");

async function connect() {
  const { state, saveCreds } = await useMultiFileAuthState("./auth");

  const sock = makeWASocket({
    logger: pino({ level: "silent" }),
    browser: ["Chrome (Linux)", "", ""],
    auth: state
  });

  sock.ev.on("creds.update", saveCreds);
  return sock;
}

module.exports = connect;
