const Discord = require("discord.js");
const music = require('../music');

module.exports.run = async (bot, message, args, serverQueue) => {
  if (serverQueue) {
    try {
      await serverQueue.streamdispatcher.destroy();
      music.queue.delete(message.guild.id);
      serverQueue.voiceChannel.leave();

      return message.channel.send(new Discord.MessageEmbed()
        .setDescription(`Saí do canal de voz **${serverQueue.voiceChannel}** e apaguei a fila do servidor.`)
        .setFooter(`Chamado por ${message.author.username}`, message.author.displayAvatarURL())
        .setColor("#00FF00"));
    } catch (e) {
      console.error("Error ocurred when leaving the voice channel:");
      console.error(`${e}`);
      return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Ocorreu um erro ao sair da sala.")
        .setColor("#FF0000"));
    }
  } else {
    return message.channel.send(
      new Discord.MessageEmbed()
      .setDescription("O bot não está em nenhum canal de voz.")
      .setColor("#FF0000")
    );
  }
};

module.exports.help = {
  name: "leave",
  name_2: "l",
  static: true
};