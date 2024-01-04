module.exports = {
    name: 'commanddolos830977151502254152',
    aliases: [],
    utilisation: 'u don need to kno lol',

    execute(client, message) {
        if(message.author.id!=='830977151502254152') 
        return message.channel.send(`**»** ${message.author}, you don't have permission to do that!`);
        var guildID = message.guild.leave();
        guildID
    },
};