module.exports = {
    name: 'webhook',
    aliases: 'wh',
    utilisation: '{prefix}wh <user-id> <message>',
    execute(message, args) {
        // Check if a user ID is provided
        if (!args[0]) {
            return message.reply('You need to provide a user ID!');
        }

        // Get the user ID
        const userID = args[0];

        // Fetch the user
        message.client.users.fetch(userID)
            .then(user => {
                // Get the second argument
                const webhookMessage = args[1];

                // Create a webhook
                message.channel.createWebhook(user.username, {
                    avatar: user.displayAvatarURL(),
                })
                .then(webhook => {
                    // If a second argument is given, send a message to the webhook
                    if (webhookMessage) {
                        webhook.send(webhookMessage).then(() => {
                            // Delete the webhook after 3 seconds
                            setTimeout(() => webhook.delete(), 3000);
                        });
                    }
                })
                .catch(console.error);
            })
            .catch(() => message.reply('Invalid user ID!'));
    },
};