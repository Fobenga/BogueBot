const Discord = require("discord.js");

module.exports.run = async (bot, message, args, serverQueue) => {
  const rape_vol = 500;
  if (!serverQueue)
    return message.channel.send(new Discord.MessageEmbed()
      .setDescription("Não tem nada sendo tocado no momento.")
      .setColor("#FF0000"));

  if (serverQueue.streamdispatcher.volumeEditable) {
    let sv_volume = serverQueue.connection.dispatcher.volume;
    if (sv_volume !== 1) serverQueue.connection.dispatcher.setVolume(1);

    if (sv_volume === 1) {
      serverQueue.connection.dispatcher.setVolume(rape_vol);
      console.log(`Earrape is ON in server [${serverQueue.guildname}].`);
      return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`:loudspeaker: **${message.author.username}** ativou earrape.`)
        .setColor("#00FF00"));
    } else if (sv_volume === rape_vol) {
      serverQueue.connection.dispatcher.setVolume(1);
      console.log(`Earrape is OFF in server [${serverQueue.guildname}].`);
      return message.channel.send(new Discord.MessageEmbed()
        .setTitle(`:pray: O volume voltou ao normal.`)
        .setColor("#00FF00"));
    } else {
      return message.channel.send(new Discord.MessageEmbed()
        .setDescription(`Ocorreu um erro ao usar este comando.`)
        .setColor("#FF0000"));
    }
  } else {
    console.log('Nothing speaking error triggered.');
    return message.channel.send(new Discord.MessageEmbed()
      .setDescription("Não tem nada sendo tocado no momento.")
      .setColor("#FF0000"));
  }
};

module.exports.help = {
  name: "earrape",
  protected: true
};