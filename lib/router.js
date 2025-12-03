const fs = require("fs");
const path = require("path");

function loadCommands() {
  let cmds = {};
  const files = fs.readdirSync("./commands");

  files.forEach((f) => {
    const cmd = require("../commands/" + f);
    cmds[cmd.name] = cmd;
  });

  return cmds;
}

module.exports = { loadCommands };
