const Discord = require("discord.js");
const distube = require("distube");

module.exports.run = async (bot, message, args) => {
  if (!message.member.voice.channel) return message.channel.send('Metete al canal de voz primero ps gil');

  let musicArray = message.content.split(" ");
  let musicArgs = musicArray.slice(1);

  let music = musicArgs.join(" ");
  bot.distube.play(message, music);
  //distube.play(message, args.join(" "));
};

module.exports.config = {
  name: "play",
  description: "Sirve pa escuchar musica",
  usage: "%play",
  accessableby: "Members",
  aliases: ["p"],
};
