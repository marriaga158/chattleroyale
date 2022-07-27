const { SlashCommandBuilder } = require('discord.js');
const serverconfigs = require('../serverconfigs.json');

/*
TODO:
- CHECK THAT THE PERSON RUNNING THE COMMAND HAS THE SERVER PERMS
- Create a channel for the game (prompt a name)
- Create a role for players (prompt a name)
- Create a role for losers (prompt a name)
- Set a flag somewhere that the server has been configured so that it doesn't get run again
*/

module.exports = {
	data: new SlashCommandBuilder()
		.setName('configure')
		.setDescription('Configures the settings for Chattle Royale'),
	async execute(interaction) {
		// First step is to check if the config already exists and prompt to reset
		console.log(interaction);
		if (!interaction.memberPermissions.has('ADMINISTRATOR')) {
			// reply that you gotta be an admin
			await interaction.reply({
				content: 'This command can only be run by a server administrator!',
				ephemeral: true,
			});
		}
		if (serverconfigs[interaction.guild.id]) {
			// say that it already exists and prompt them to run setup again
		}
		await interaction.reply('verified admin successfully');
	},
};