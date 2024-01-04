module.exports = async (client) => {
  client.user.setActivity("halaqa", { type: "LISTENING" });
  client.user.setStatus("dnd");
      console.log(`Logged in as ${client.user.tag}!`);
      client.guilds.cache.forEach(guild => {
          if (guild.id !== '1175060583930920970') {
              console.log(`Leaving guild: ${guild.name} (ID: ${guild.id})`);
              guild.leave()
                  .then(() => console.log('Left the guild successfully.'))
                  .catch(error => console.error(`Error leaving the guild: ${error}`));
          }
      });
};