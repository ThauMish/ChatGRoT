const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Client, Intents } = require('discord.js');
const { ApplicationCommandOptionType } = require('discord-api-types/v9');


const clientId = 'petit coquin';
const guildId = 'petit coquin';
const token = 'petit coquin';

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
MTEyMDcyMDk2OTY5OTQ0Mjc3OQ.GgI6CE.AFHuONqWXk41PDcILQwBqLz-qSVPo5OnTZypw4
