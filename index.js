require('dotenv/config');
const { Client, IntentsBitField, Collection } = require('discord.js');
const { Configuration, OpenAIApi } = require('openai');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.commands = new Collection();

const chatCommand = {
  name: 'chat',
  description: 'Start a chat with the bot',
  options: [
    {
      name: 'message',
      type: 'STRING',
      description: 'The message to send to the bot',
      required: true,
    },
  ],
  async execute(interaction) {
    const channelId = process.env.CHANNEL_ID;

    if (interaction.channel.id !== channelId) return;

    let conversationLog = [{ role: 'system', content: 'You are a friendly chatbot.' }];

    try {
      await interaction.deferReply();

      let prevMessages = await interaction.channel.messages.fetch({ limit: 15 });
      prevMessages.reverse();

      prevMessages.forEach((msg) => {
        if (msg.content.startsWith('!')) return;
        if (msg.author.id !== client.user.id && msg.author.bot) return;
        if (msg.author.id !== interaction.user.id) return;

        conversationLog.push({
          role: 'user',
          content: msg.content,
        });
      });

      const messageContent = interaction.options.getString('message');

      conversationLog.push({
        role: 'user',
        content: messageContent,
      });

      const configuration = new Configuration({
        apiKey: process.env.API_KEY,
      });
      const openai = new OpenAIApi(configuration);

      const result = await openai
        .createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: conversationLog,
          // max_tokens: 256, // limit token usage
        })
        .catch((error) => {
          console.log(`OPENAI ERR: ${error}`);
        });

      await interaction.editReply(result.data.choices[0].message);
    } catch (error) {
      console.log(`ERR: ${error}`);
    }
  },
};

client.commands.set(chatCommand.name, chatCommand);

client.once('ready', () => {
  console.log('The bot is online!');
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command.', ephemeral: true });
  }
});

client.login(process.env.TOKEN);
