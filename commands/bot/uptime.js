const Discord = require('discord.js');
const fullday = 24 * 60 * 60 * 1000;

function ms_convert(ms, bot) {
  hours = Math.floor((ms % fullday) / (fullday / 24));
  hoursms = ms % (fullday / 24);
  minutes = Math.floor((hoursms) / (fullday / (24 * 60)));
  minutesms = ms % (fullday / (24 * 60));

  let hourword = 'hora';
  if (hours !== 1) hourword += 's';
  let minuteword = 'minuto';
  if (minutes !== 1) minuteword += 's';

  let hourstring = `${hours} ${hourword} e`;
  let minutestring = ` ${minutes} ${minuteword}.`;

  let fulltime_string = ``;
  if ((fullday - bot.uptime) >= (fullday / 24)) // remaining time greater than 1 hour
    fulltime_string += hourstring + minutestring; // include hour string
  else
    fulltime_string += minutestring; // do not include hour string

  return `**${fulltime_string}**`;
}

module.exports.run = async (bot, message, args) => {
  return message.channel.send(new Discord.MessageEmbed().addField(`Tempo restarte do ${bot.user.username} até a próxima reinicialização.`,
      ms_convert(fullday - bot.uptime, bot))
    .setColor("#00FF00"));
}

module.exports.help = {
  name: 'uptime',
  descr: 'Mostra o tempo restante até o bot ser reiniciado. (24h)'
}