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

        await rest.put(Routes.applicationCommands(clientId), { body: commands },);

        console.log(`Comandos de (/) atualizados com sucesso!`);
    } catch (error) {
        process.on('unhandledRejection', (reason, p) => {
            console.log("[SISTEMA]".red, "Ocorreu um erro ao executar um comando | Script rejeitado:");
            console.log(reason, p);
        });
    
        process.on("uncaughtException", (err, origin) => {
            console.log("[SISTEMA]".red, "Ocorreu um erro ao executar um comando | Catch error:");
            console.log(err, origin);
        }) 
    
    process.on('uncaughtExceptionMonitor', (err, origin) => {
            console.log("[SISTEMA]".red, "Ocorreu um erro ao executar um comando | Bloqueio:");
            console.log(err, origin);
        });
    }
      
 })();