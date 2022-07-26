const { SlashCommandBuilder } = require('discord.js');

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
		await interaction.reply('Unimplemented...');
	},
};