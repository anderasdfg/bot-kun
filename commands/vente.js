const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.voice.channel) return message.channel.send('Metete al canal de voz primero ps gil');
    
    let Canalvoz = message.member;
    console.log(Canalvoz);
    // if (!Canalvoz || Canalvoz.type !== 'voice') {
    // message.channel.send('Unete al canal de voz primero pues gilazo').catch(error => message.channel.send(error));
    // } else if (message.guild.voiceConnection) {
    // message.channel.send('Ya estoy conectado ciego');
    // } else {
    //  message.channel.send('Toy entrando aguanta un toque...').then(m => {
    //       Canalvoz.join().then(() => {
    //            m.edit('Ya estoy ya').catch(error => message.channel.send(error));
    //      }).catch(error => message.channel.send(error));
    //  }).catch(error => message.channel.send(error));
    // }
};

module.exports.config = {
  name: "vente",
  description: "El bot entra al vc",
  usage: "%vente",
  accessableby: "Members",
  aliases: [],
};
