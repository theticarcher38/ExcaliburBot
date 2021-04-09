const { Client, Collection } = require('discord.js');
const { TOKEN } = require('./config/token.json');

const client = new Client({
    disableEveryone: true
})

client.commands = new Collection();
client.aliases = new Collection();


['command', 'event'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
})

client.login(TOKEN);