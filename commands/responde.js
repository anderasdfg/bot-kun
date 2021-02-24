const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var rpts = [
    "sí",
    "no",
    "tal vez",
    "claro pe cagada",
    "puede ser",
    "que chucha te importa",
    "definitivamente",
    "ajam ",
    "me abstengo a responder tu pregunta",
  ];
  message.reply(rpts[Math.floor(Math.random() * rpts.length)]);
};

module.exports.config = {
  name: "responde",
  description: "Responde tus preguntas",
  usage: "%responde",
  accessableby: "Members",
  aliases: [],
};
