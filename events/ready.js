module.exports.run = async(client) => {
    console.log(`${client.user.tag} is now online`);
    client.user.setActivity('Under Development', {type: 'WATCHING'})
}