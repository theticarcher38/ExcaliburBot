const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'hug',
    description: 'Send a hug to mentioned user',
    run: async(client, message, args) => {
        const huggingGif = require('../../assets/gifs.json');
        const user = message.mentions.users.first() || client.users.cache.get(u => u.id === args[0]);
        const gif = huggingGif.huggingGif[Math.floor(Math.random() * huggingGif.huggingGif.length)]

        if (!user) {
            message.channel.send('Please mention a user to hug');
        }

        let embed = new MessageEmbed()
        .setTitle(`${message.author.username} hugged ${message.mentions.users.first().username}`)
        .setImage(gif); 
        message.channel.send(embed);
    }
}