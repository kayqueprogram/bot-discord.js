const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('informações sobre o servidor'),
    async execute(interaction) {
        //o interaction.guild é um comando que representa o servidor onde o comando foi executado
    
        await interaction.reply(`O servidor ${interaction.guild.name} possui ${interaction.guild.memberCount} membros.`)

    },
};