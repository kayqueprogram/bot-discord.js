const { REST, Routes } = require('discord.js');
const { clientId, guildId, token  } = require('./config.json');
const fs = require('node:fs');

const commands = []

// Pegando todos os arquivos de comando do diretório de comandos que foram criados anteriormente

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

// Construindo e preparando uma instância do módulo REST

const rest = new REST({ version: '10' }).setToken(token);

// implementando os comandos

(async () => {
    try {
        console.log(`Iniciada a atualização ${commands.length} comandos de (/) `);

        const data = await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

        console.log(`Comandos de (/) ${data.length} atualizados com sucesso!`);
    } catch (error) {
        //capturando erros
        console.error(error);
    }
 })();