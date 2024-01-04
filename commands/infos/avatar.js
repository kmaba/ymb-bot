module.exports = {
	name: 'avatar',
	aliases: ['av', 'pfp'],
	utilisation: '{prefix}avatar <user>',
    execute(client, message, args) {

       let user = message.author;
       let avatar;

       //when args are given, set user to mentioned user
       if (args.length > 0) {
           let userID = args[0].slice(3, -1)
           user = message.guild.members.cache.get(userID).user;
       }

       avatar = getUserAvatar(user);

       message.channel.send({
        embed: {
          color: 'ORANGE',
          url: {avatar},
          image: {avatar},
          author: { name: `Avatar of ${user.username}` },
          footer: { text: 'Made with javascript (kmaba)' },
          timestamp: new Date(),
          description: `This bot is for moderation and use of the YMB`,
        },
      });
   }
}


//This returns the AvatarURL of the user
function getUserAvatar(user) {
    let avatar = user.avatarURL()

    return avatar;
}
