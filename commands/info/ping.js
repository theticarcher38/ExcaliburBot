const Discord = require('discord.js');
const { PREFIX } = require('../../config/prefix.json');

module.exports = {
    name: "ping",
    aliases: ["latency"],
    description: "Returns the bots ping",
    usage: `${PREFIX}ping`,
    run: async(client, message) => {
        const embed = new Discord.MessageEmbed()
        .setTitle("Bot's ping")
        .setDescription(`Ping - ${client.ws.ping}`)
        message.channel.send(embed)
    }
}