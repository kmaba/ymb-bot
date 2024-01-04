const Discord = require('discord.js');

module.exports = {
    name: 'createWebhook',
    aliases: ['wh', 'webhook'],
	utilisation: '{prefix}wh <userid> <message>',
    execute(client, message, args) {
        // Check if the user ID is provided
        if (!args[0]) {
            return message.channel.send('You need to provide a user ID!');
        }

        // Fetch the user
        message.client.users.fetch(args[0]).then(user => {
            // Create a webhook with the user's name and avatar
            message.channel.createWebhook(user.username, {
                avatar: user.displayAvatarURL(),
            })
            .then(webhook => {
                // If a second argument is provided, send a message to the webhook
                if (args[1]) {
                    webhook.send(args[1]);
                }
            })
            .catch(console.error);
        })
        .catch(() => {
            message.reply('An error occurred while fetching the user!');
        });
    },
};