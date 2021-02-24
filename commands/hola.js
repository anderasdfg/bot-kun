module.exports.run = async (bot, message, args) => {
  var rpts = [
    "hola belleza",
    "cómo andas?",
    "qué chucha quieres",
    "habla",
    "hi",
    "que pasó",
    "konichiwa",
    "ohayo oniii-chan",
    "ohayo",
    "hola papi",
    "yahallo"
  ];
  message.reply(rpts[Math.floor(Math.random() * rpts.length)]);
};

module.exports.config = {
  name: "hola",
  description: "Responde el saludo",
  usage: "%hola",
  accessableby: "Members",
  aliases: ["saludame"],
};
