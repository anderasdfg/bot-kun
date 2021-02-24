const Discord = require("discord.js");
const distube = require("distube");

module.exports.run = async (bot, message, args) => {

  if (!message.member.voice.channel) return message.channel.send('No me puedes callar si no me estás escuchando');

  let queue = await bot.distube.getQueue(message);
  if (queue){
      bot.distube.skip(message)
      message.channel.send('Skipeando tu corazón...')
  }else if(!queue){
    return
  }
  
  
};

module.exports.config = {
  name: "skip",
  description: "Salta la canción",
  usage: "%skip",
  accessableby: "Members",
  aliases: [],
};
