const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let userArray = message.content.split(" ");
  let userArgs = userArray.slice(1);
  let member =
    message.mentions.members.first() ||
    message.guild.members.cache.get(userArgs[0]) ||
    message.guild.members.cache.find(
      (x) =>
        x.user.username.toLowerCase() === userArgs.slice(0).join(" ") ||
        x.user.username === userArgs[0]
    ) ||
    message.member;

  let img = member.user.avatarURL();

  if (img === null) {

    message.channel.send("No tiene foto :c");
    
  } else {
    const userEmbed = new Discord.MessageEmbed()
            .setColor("#ffefa1")
            .setImage(img + "?size=1024")
            .setFooter(`Ahi ta la foto cagada`);

    message.channel.send(userEmbed);
  }
};

module.exports.config = {
  name: "foto",
  description: "Muestra tu avatar",
  usage: "%foto",
  accessableby: "Members",
  aliases: [],
};
