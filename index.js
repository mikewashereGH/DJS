const { Client, GatewayIntentBits, AttachmentBuilder, EmbedBuilder } = require("discord.js");

const config = require("../DJS/config.json");

const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

bot.on("ready", () => {
    console.log("Bot is online");
});

bot.on("messageCreate", async (message) => {
    if (message.content === `${config.prefix}test`) {
        message.channel.send("Hello World!");
    }
    if (message.content === `${config.prefix}blur`) {
        let embed = new EmbedBuilder()
            .setTitle("Hello World!")
        message.channel.send({
            embeds: [embed]
        });
    }
});

bot.login(`${config.token}`);