const Discord = require("discord.js");
const distube = require("distube");

module.exports.run = async (bot, message, args) => {
  if (!message.member.voice.channel)
    return message.channel.send("No ta sonando nada");

  let queue = bot.distube.getQueue(message);

  if (queue) {
    message.channel.send(
      "La cola 🍑\n" +
        queue.songs
          .map(
            (song, id) =>
              `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
          )
          .slice(0, 10)
          .join("\n")
    );
  } else {
    return message.channel.send("No ta sonando nada");
  }
};

module.exports.config = {
  name: "queue",
  description: "Mira la cola",
  usage: "%queue",
  accessableby: "Members",
  aliases: [],
};
