const Discord = require("discord.js");
const waifupic = require("../services/waifupics");

module.exports.run = async (bot, message, args) => {
  let picArray = message.content.split(" ");
  let picArgs = picArray.slice(1);
  
  if (!picArgs) {
    //No escribió ninguna categoría
    message.channel.send(`Escribe la categoría ps cagada`);
  } else {    
    if (!picArgs[1]) {
      //No mencionó a nadie
      let member = message.member.user.username;      
      let type = picArgs[0];
      let mensaje = await responseImage(type, waifupic.mensajePersonal(member, type) );
      message.channel.send(mensaje);
    } else {

      let member = message.mentions.members.first() || message.guild.members.cache.get(picArgs[1]) || message.guild.members.cache.find((x) => x.user.username.toLowerCase() === picArgs.slice(0).join(" ") || x.user.username === picArgs[1]);

      let from = message.member.user.username;
      let to = member.user.username;
      let type = picArgs[0];

      let mensaje = await responseImage(type,waifupic.mensajeCompartido(from, to, type));
      message.channel.send(mensaje);
    }
  }
};

async function responseImage(type, footer) {
  var gif = await waifupic.getAnimePic(type);
  console.log(gif);
  if (gif) {
    const userEmbed = new Discord.MessageEmbed()
      .setColor("#beca5c")
      .setImage(gif)
      .setFooter(footer);
    return userEmbed;
  } else {
    return `No tengo ninguna imagen que tenga que ver con *${type}* `;
  }
}

module.exports.config = {
  name: "pic",
  description: "Muestra una imagen xd",
  usage: "%pic",
  accessableby: "Members",
  aliases: ["img"],
};
