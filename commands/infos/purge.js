module.exports = {
    name: 'purge',
    aliases: ['pr'],
    utilisation: '{prefix}purge',

    async execute(client, message, args) {
      var amount = parseInt(args[0])

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you don't have the permission for that.").then((msg) => msg.delete({ timeout: 5000 }));
  if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send("I don't have the permission for that.").then((msg) => msg.delete({ timeout: 5000 }));
        if (!amount) return message.channel.send("Please specify the amount of messages you want me to delete")
        if (amount > 100 || amount < 1) return message.channel.send("Please select a number *between* 100 and 1")

        message.channel.bulkDelete(amount).catch(err => {
              message.channel.send(':x: Due to Discord Limitations, I cannot delete messages older than 14 days') })

        let msg = await message.channel.send(`Deleted \`${amount}\` messages`)
        setTimeout(() => {
            msg.delete()
        }, 2000)
    
    },
};

