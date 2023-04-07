const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Client, Intents } = require('discord.js');
const { ApplicationCommandOptionType } = require('discord-api-types/v9');


const clientId = '1093806833677893703';
const guildId = '856540095595544586';
const token = 'MTA5MzgwNjgzMzY3Nzg5MzcwMw.GY3Dw-.UBHJTUfe3qKDNHjM9zcHj7loz7UPLiunitxUXc';

const chatCommand = {
  name: 'chat',
  description: 'Start a chat with the bot',
  options: [
    {
      name: 'message',
      type: ApplicationCommandOptionType.String,
      description: 'The message to send to the bot',
      required: true,
    },
  ],
};

const commands = [chatCommand];

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });

        console.log('Successfully registered application commands.');
    } catch (error) {
        console.error(error);
    }
})();
