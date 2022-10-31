const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('exibe avatar de determinado usuário')
    .addUserOption(option => option.setName('target').setDescription('Exibir avatar de')),
    async execute(interaction) {
        const user = interaction.options.getUser('target') || interaction.user;

        const embedAv = new EmbedBuilder().setColor([225,105,6]).setImage(user.displayAvatarURL({size: 1024}))
        interaction.reply({ embeds: [embedAv] })
        },
};