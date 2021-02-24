const Discord = require("discord.js");
const distube = require("distube");

module.exports.run = async (bot, message, args) => {
  if (!message.member.voice.channel) return message.channel.send('Metete al canal de voz primero ps gil');

  let queue = await bot.distube.getQueue(message);
  if (queue){
    let mode = bot.distube.setRepeatMode(message, parseInt(args[0]));
    mode = mode ? mode == 2 ? "Repetir cola" : "Repetir canción" : "Sin loop";
    message.channel.send("Cambiando el modo a `" + mode + "`");
  }else if(!queue){
    return
  }
 
  
};

module.exports.config = {
  name: "loop",
  description: "Pone loop",
  usage: "%loop",
  accessableby: "Members",
  aliases: ["repeat"],
};
