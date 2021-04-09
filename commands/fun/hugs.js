const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'hug',
    description: 'Send a hug to mentioned user',
    run: async(client, message, args) => {
        const huggingGif = [
            'https://media.giphy.com/media/VbawWIGNtKYwOFXF7U/giphy.gif', 
            'https://media.giphy.com/media/3oEdv4hwWTzBhWvaU0/giphy.gif', 
            'https://media.giphy.com/media/3M4NpbLCTxBqU/giphy.gif', 
            'https://media.giphy.com/media/yidUzriaAGJbsxt58k/giphy.gif',
            'https://media.giphy.com/media/ZBQhoZC0nqknSviPqT/giphy.gif'
        ]
        const user = message.mentions.users.first() || client.users.cache.get(u => u.id === args[0]);
        const gif = huggingGif[Math.floor(Math.random() * huggingGif.length)]

        if (!user) {
            message.channel.send('Please mention a user to hug');
        }

        let embed = new MessageEmbed()
        .setTitle(`${message.author.username} hugged ${message.mentions.users.first().username}`)
        .setImage(gif); 
        message.channel.send(embed);
    }
}