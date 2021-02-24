const Discord = require("discord.js");
const distube = require("distube");

module.exports.run = async (bot, message, args) => {

  if (!message.member.voice.channel) return message.channel.send('No me puedes callar si no me estás escuchando');

  let queue = await bot.distube.getQueue(message);
  if (queue){
      bot.distube.stop(message)
      message.channel.send('Me largo')
  }else if(!queue){
    return
  }
  
  
};

module.exports.config = {
  name: "stop",
  description: "Detiene la música .-.",
  usage: "%stop",
  accessableby: "Members",
  aliases: [],
};
