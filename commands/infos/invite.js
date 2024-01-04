module.exports = {
    name: 'invite',
    aliases: ['i'],
    category: 'Infos',
    utilisation: '{prefix}invite',

    execute(client, message) {
        message.channel.send("The invite link is:");
        message.channel.send("# ***<https://dsc.gg/ymb-wa>***");
    },
};