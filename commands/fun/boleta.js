const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    return message.channel.send(new Discord.MessageAttachment('./imagebank/boleta.jpeg'));
}

module.exports.help = {
    name: 'boleta',
    descr: `Boleta`
}