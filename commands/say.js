const { SlashCommandBuilder, PermissionFlagsBits} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
    .setName('say')
    .setDescription('Envia uma mensagem')
    .addStringOption(option =>
    option.setName('message').setDescription('Envia e mensagem').setRequired(true)
    ),
    
    async execute(interaction) {
        interaction.reply({ content: interaction.options.getString('message')})
    },
};