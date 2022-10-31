const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
        .setName('clear')
        .setDescription('Deleta até 122 mensagens')
        .addIntegerOption(option => option.setName('amount').setDescription('Número de mensagens a serem deletadas')),
    async execute(interaction) {
        const amount = interaction.options.getInteger('amount');

        if(amount < 1 || amount > 122) {
            return interaction.reply({ content: 'Você precisa informar um número entre 1 e 122', ephemeral: true});
        }

        await interaction.channel.bulkDelete(amount, true).catch(error => {
            console.error(error);
            interaction.reply({ content: 'Ocorreu um erro ao tentar remover as mensagens neste canal!', ephemeral: true });

        }) 
        return interaction.reply({ content: `\` ${amount} \` mensagens removidas com sucesso!`, ephemeral: true });
    },
};