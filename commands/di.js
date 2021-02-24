const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let diArray = message.content.split(" ");
  let diArgs = diArray.slice(1);

  let texto = diArgs.join(" ");    

  //Si no se pasan los argumentos (configuración manual)
  if (!texto) {
    message.channel.send(`Escribe algo ps cagada`);    
  }else{
    //message.channel.bulkDelete(1)
    message.channel.send(texto, { tts: true });
    
  }  
}

module.exports.config = {
  name: "di",
  description: "Repite lo que dices",
  usage: "%di",
  accessableby: "Members",
  aliases: ['habla'],
};
