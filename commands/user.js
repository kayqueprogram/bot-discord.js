const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('usuário')
        .setDescription('Fornece informações sobre o usuário'),
    async execute(interaction) {
        //interaction.user é o objeto que representa o usuário que executou o comando
        //interaction.member é o objeto GuildMember, que representa o usuário na guilda específica
        await interaction.reply(`Quem executou o comando: ${interaction.user.username}\nEstá no servidor desde: ${interaction.member.joinedAt}.`)
    },
};