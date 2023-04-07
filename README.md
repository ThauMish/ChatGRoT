## ChatGRoT

ChatGRoT is a simple Discord chatbot powered by OpenAI's GPT-3.5-turbo. The bot can engage in conversations, provide assistance, and answer user queries. This repository contains the source code and instructions to set up the chatbot in your Discord server.

## Features

-   Engaging conversation with users
-   Customizable to fit your needs
-   Powered by OpenAI's GPT-3.5-turbo

## Prerequisites

-   Node.js (v16 or higher)
-   npm (v7 or higher)
-   A Discord bot token
-   An OpenAI API key

## Installation

1.  Clone the repository:
    
    ```
    bashgit clone https://github.com/ThauMish/ChatGRoT.git
    
    ```
    
2.  Navigate to the project folder:
    
3.  Install dependencies:
    
4.  Create a `.env` file in the project root with the following contents:
    
    ```
    makefileTOKEN=YOUR_DISCORD_BOT_TOKEN
    API_KEY=YOUR_OPENAI_API_KEY
    CHANNEL_ID=YOUR_DESIRED_CHANNEL_ID
    
    ```
    
    Replace `YOUR_DISCORD_BOT_TOKEN`, `YOUR_OPENAI_API_KEY`, and `YOUR_DESIRED_CHANNEL_ID` with your Discord bot token, OpenAI API key, and the ID of the channel you want the bot to be active in, respectively.
    
5.  Register the `/chat` command in your Discord server by running:
    
    ```
    node register-command.js
    
    ```
    
    Make sure to replace `YOUR_CLIENT_ID`, `YOUR_GUILD_ID`, and `YOUR_BOT_TOKEN` in the `register-command.js` file with your bot's client ID, your server's guild ID, and your bot's token, respectively.
    
6.  Start the bot:
    

## Usage

To use the chatbot in your Discord server, simply type `/chat` followed by your message in the designated channel. The bot will respond with a relevant answer or engage in a conversation.

Example:

```
/chat What is the capital of France?

```

## Customization

You can customize the bot's behavior by modifying the `index.js` file. For example, you can change the maximum number of tokens for the generated response, adjust the conversation log length, or add additional roles and content to the conversation log.

## License

This project is licensed under the MIT License. See the [LICENSE](https://chat.openai.com/LICENSE) file for details.
