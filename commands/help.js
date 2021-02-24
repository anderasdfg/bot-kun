const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //Tenemos que establecer un argumento para el comando de ayuda porque tendrá un argumento adicional dependiendo de lo que pida Ejm: %help pic
  let helpArray = message.content.split(" ");
  let helpArgs = helpArray.slice(1);
  console.log(helpArgs[0]);

  //Customizando de acuerdo al argumento
  if (helpArgs[0] === "pic") {
    var embed = new Discord.MessageEmbed()
      .setAuthor(
        `Categorías (no uses ninguna  ahorita porque estoy en mantenimiento entiende)`
      )
      .setDescription(
        "```shinobu | megumin | bully | cuddle | cry | hug | awoo | kiss | lick | pat | smug | bonk | yeet | blush | smile | wave | smile | wave | highfive | handhold | nom | bite | glomp | kill | slap | happy | wink | poke | dance | cringe | blush```"
      )
      .addFields({
        name: "Ejemplo por si acaso",
        value: "```%pic happy```",
        inline: true,
      })
      .setColor("#ffaec0");
    message.channel.send(embed);
  }

  //Si no se pasan los argumentos (configuración manual)
  if (!helpArgs[0]) {
    var embed = new Discord.MessageEmbed()
      .setAuthor(`Estos son los comandos que puedes usar`)
      .setDescription(
        "```hola | foto | di | responde | pic | y ninguno más porque estoy en mantenimiento jeje```"
      )
      .addFields({
        name: "El prefijo para todo esto es",
        value: "```%```",
        inline: true,
      })
      .setColor("#94ebcd");

    message.channel.send(embed);
  }

  //Obtiene la información del comando a partir de la lista de comandos
  if (helpArgs[0]) {
    let command = helpArgs[0];

    if (bot.commands.has(command)) {
      command = bot.commands.get(command);
      var embed = new Discord.MessageEmbed()
        .setAuthor(`Comando %${command.config.name}`)
        .setDescription(
          `
      - **Descripción** __${
        command.config.description || "Solo Dios sabe que hace esto"
      }__
      - **Uso:** __${command.config.usage || "No tiene uso"}__
      - **Permisos:** __${command.config.accessableby || "Miembros"}__
      - **Alias:** __${command.config.aliases || "No tiene alias"}__
      `
        )
        .setColor("#2EFF00");

      message.channel.send(embed);
    }
  }
};

module.exports.config = {
  name: "help",
  description: "Descripción de los comandos",
  usage: "%help",
  accessableby: "Members",
  aliases: [],
};
