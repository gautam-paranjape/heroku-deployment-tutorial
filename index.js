const Discord = require("discord.js");
const client = new Discord.Client();
const { token } = require("./token.json");

client.on("ready", () => {
  console.log(`Bot ready`);
});

client.on("message", (message) => {
  if (message.content === "ping") {
    message.channel.send("pong");
  }
});

client.login(token);
