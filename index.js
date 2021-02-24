const Discord = require("discord.js");
const botsettings = require("./botsettings.json");

const bot = new Discord.Client({ disableEveryone: true });
//Prepara el onReady
require("./util/eventHandler")(bot);

const fs = require("fs");
const DisTube = require("distube");

bot.distube = new DisTube(bot, { searchSongs: false, emitNewSongOnly: true });
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

bot.distube
  .on("playSong", (message, queue, song) => message.channel.send(
      `Tocando \`${song.name}\` - \`${song.formattedDuration}\`\n`
  ))
  .on("addSong", (message, queue, song) =>
    message.channel.send(
      `${song.name} - \`${song.formattedDuration}\` añadida a tu cola`
    )
  )
  .on("initQueue", (queue) => {
    queue.autoplay = false;
    queue.volume = 100;
  });

const status = (queue) =>
  `Volume: \`${queue.volume}%\` | Loop: \`${
    queue.repeatMode
      ? queue.repeatMode == 2
        ? "Server Queue"
        : "This Song"
      : "Off"
  }\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

//Lee la lista de comandos
fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter((f) => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    return console.log("[LOGS] No se encontraron comandos!");
  }

  jsfile.forEach((f, i) => {
    let pull = require(`./commands/${f}`);
    bot.commands.set(pull.config.name, pull);
    pull.config.aliases.forEach((alias) => {
      bot.aliases.set(alias, pull.config.name);
    });
  });
});

bot.on("message", async (message) => {
  if (message.author.bot || message.channel.type === "dm") return;

  let prefix = botsettings.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = message.content.substring(message.content.indexOf(" ") + 1);

  if (!message.content.startsWith(prefix)) return;
  let commandfile =
    bot.commands.get(cmd.slice(prefix.length)) ||
    bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
  if (commandfile) commandfile.run(bot, message, args);
});

bot.login(botsettings.token);
