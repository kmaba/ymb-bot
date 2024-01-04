module.exports = {
    name: '-nuke',
    aliases: ['-nk'],
    utilisation: '{prefix}nuke',

  execute(client, message, args) {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("you don't have the permission for that.").then((msg) => msg.delete({ timeout: 5000 }));
  if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("I don't have the permission for that.").then((msg) => msg.delete({ timeout: 5000 }));

  if (!message.channel.parentID) {
    message.channel.clone({ position: message.channel.rawPosition }).then((ch) => {
      ch.send("Channel nuked \n https://i.gifer.com/6Ip.gif").then((msg) => msg.delete({ timeout: 7000 }));
    });
  } else {
    message.channel.clone({ parent: message.channel.parentID, position: message.channel.rawPosition }).then((ch) => {
      ch.send("Channel nuked \n https://i.gifer.com/6Ip.gif").then((msg) => msg.delete({ timeout: 7000 }));
    });
  }
  message.channel.delete();
  },
};

