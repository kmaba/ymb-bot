module.exports = {
  name: "createWebhook",
  aliases: ["wh", "webhook"],
  utilisation: "{prefix}wh <userid> <message>",
  execute(client, message, args) {
    message.delete();
    if (!args[0]) {
      return message.channel.send("You need to provide a user ID!");
    }

    // Fetch the user
    message.client.users
      .fetch(args[0])
      .then((user) => {
        // Create a webhook with the user's name and avatar
        message.channel
          .createWebhook(user.username, {
            avatar: user.displayAvatarURL(),
          })
          .then((webhook) => {
            // If a second argument is provided, send a message to the webhook
            if (args[1]) {
              // Join all the words from the second argument onwards with spaces
              const messageToSend = args.slice(1).join(' ');
              webhook.send(messageToSend).then(() => {
                // Delete the webhook after 3 seconds
                setTimeout(() => {
                  webhook.delete();
                }, 3000);
              });
            }
          })
          .catch(console.error);
      })
      .catch(() => {
        message.reply("An error occurred while fetching the user!");
      });
  },
};