module.exports = {
    name: 'blank',
    aliases: ['-'],
    utilisation: '{prefix}blank',
    execute(client, message) {
        message.delete().catch(O_o=>{});
        message.channel.send('‏‏‎ ‎');
    },
};