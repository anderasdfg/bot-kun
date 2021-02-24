const Discord = require("discord.js")

module.exports = bot => {     
    console.log("+------------------+");
    console.log("|  BOTkun ONLINE  |");
    console.log("+-----------------+");   
    bot.user.setActivity("Mirai Nikki", {type: "WATCHING"});
    //TP 2021-1 - General:704833790551392269
    //  const channel = bot.channels.cache.get('704833790551392269');
    //  console.log(channel);
    //  channel.send('Ya desperté amigas');  
}