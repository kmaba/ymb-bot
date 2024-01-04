const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'asyncggrrdoloslol',
	aliases: ['ggrrdolos'],
	utilisation: '{prefix}Im not telling you',
	async execute(client, message, args) {
		message.delete();
		
    console.log(message.guild.roles)

    //if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have MANAGE_ROLES permission').then((m) => m.delete({ timeout: 5000 }));

		if (!args[0] || !args[1]) return message.channel.send('Incorrect usage, It\'s `<username || user id> <role name || id>').then((m) => m.delete({ timeout: 2000 }));

		try {
			const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
			const roleName = message.guild.roles.cache.find((r) => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

			const alreadyHasRole = member._roles.includes(roleName.id);

			if (alreadyHasRole) return message.channel.send('User already has that role').then((m) => m.delete({ timeout: 2000 }));

			const embed = new MessageEmbed()
				.setTitle(`Role Name: ${roleName.name}`)
				.setFooter(new Date().toLocaleString());

			return member.roles.add(roleName).then(() => message.channel.send(embed));
			await embed.delete();
		} catch (e) {
			return message.channel.send('Try to give a role that exists next time...').then((m) => m.delete({ timeout: 5000 }));
		}
	},
};
