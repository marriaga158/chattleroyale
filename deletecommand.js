const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { clientId, token } = require('./config.json');

const rest = new REST({ version: '10' }).setToken(token);

let global;
let guildId;

// I'm going to abstract this so I don't have to reuse this all the time
function getArg(num, name) {
	if (num >= process.argv.length) throw `Error: argument ${num} ${name} not provided. Use: deletecommands.js (gu|gl) <commandId> (guildId)`;
	return process.argv[num];
}

const commandScope = getArg(2, 'commandScope');
if (commandScope.toLowerCase === 'gu') {
	global = false;
	guildId = getArg(4, 'guildId');
} else if (commandScope.toLowerCase === 'gl') {
	global = true;
}

const commandId = getArg(3, 'commandId');
guildId = getArg(4, 'guildId');

if (global) {
	// for global commands
	rest.delete(Routes.applicationCommand(clientId, commandId))
		.then(() => console.log('Successfully deleted application command'))
		.catch(console.error);
} else {
	// for guild-based commands
	rest.delete(Routes.applicationGuildCommand(clientId, guildId, commandId))
		.then(() => console.log('Successfully deleted guild command'))
		.catch(console.error);
}