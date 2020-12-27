const Discord = require('discord.js');
const botconfig = require.main.require('./botconfig.json');

module.exports.run = async (bot, message, args) => {
    let output = args.join(' ');

    if (!output)
        return message.channel.send(new Discord.MessageEmbed()
            .setTitle('Uso incorreto do comando')
            .setDescription("``" + `${botconfig.prefix}${this.help.name} [${this.help.arg}]` + "``")
            .setColor('#FF0000'));


    await message.channel.send(`\u200B` + output); // '\u200B prevent from bot requesting self commands
    return message.delete();
}

module.exports.help = {
    name: 'say',
    descr: `Faz o bot enviar uma mensagem escrita pelo usuário.`,
    arg: ['mensagem']
}