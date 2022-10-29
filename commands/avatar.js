const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('exibe avatar de determinado usuário')
        .addUserOption(option => option.setName('target').setDescription('Exibir avatar de')),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
        if (user) return interaction.reply(`${user.username} avatar: ${user.displayAvatarURL({ size: 1024, dynamic: true })}`);
        return interaction.reply(`Seu avatar: ${interaction.user.displayAvatarURL({size: 1024})}`);
    },
};