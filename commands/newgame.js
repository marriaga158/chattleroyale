const { SlashCommandBuilder } = require('discord.js');

/*
TODO:

- Check that the guild is configured correctly
-
*/
module.exports = {
	data: new SlashCommandBuilder()
		.setName('newgame')
		.setDescription('Starts a new game of Chattle Royale'),
	async execute(interaction) {
		await interaction.reply('Unimplemented...');
	},
};