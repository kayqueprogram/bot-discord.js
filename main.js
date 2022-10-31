// Classes necessárias do discord.js
const fs = require('node:fs');
const path = require('node:path');
const {Client, Collection, ActivityType, Events, GatewayIntentBits} = require('discord.js');
const {	VoiceConnectionStatus, AudioPlayerStatus} = require('@discordjs/voice');
const {token} = require('./config.json');



// Criando uma nova instância do cliente
const client = new Client({intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

client.once(Events.ClientReady, () => {
	console.log(`Estou online! E logado como ${client.user.tag}`);
    // mensagem de status do bot online
        /* client.user.setActivity('https://github.com/kayqueprogram', { type: ActivityType.Watching});*/
        client.user.setActivity('Halloween Communis Scientia', { type: ActivityType.Competing });
        client.user.setStatus('dnd');
	},
);

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Ocorreu um erro ao executar este comando!', ephemeral: true });
	}
});


// Logando no client Discord com o token definido

client.login(token);