const Discord = require('discord.js');
module.exports = {
    name: 'poll',
    aliases: ['po', 'pl'],
    utilisation: '{prefix}ping',

    async execute(client, message, args) {
      let question = args.slice(0).join(" ");

  if (args.length === 0)
  return message.reply('**Invalid Format:** `-Poll <Question>`')

  const embed = new Discord.MessageEmbed()
  .setTitle("A Poll Has Been Started!")
  .setColor("#5599ff")
  .setDescription(`${question}
  
This poll Started By: ${message.author.username}
  
    Here is how you can answer:
  
  -React with :thumbsup: to agree
  -React with :thumbsdown: to disagree
  -React with :person_shrugging: if you are unsure
  
        Thank you for your answers`)
  .setFooter('Made with javascript (kmaba)')

  message.channel.bulkDelete(1)
  let messageembed = await message.channel.send({embed})
  messageembed.react('👍')
  .then(() =>  messageembed.react('👎'))
  .then(() =>  messageembed.react('🤷'))
  .catch(() => console.error('Emoji failed to react.'));  

    }
    
};