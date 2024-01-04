module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.reply(`${client.emotes.success} - Ping : **${client.ws.ping}ms** !`);
    },
};