const express = require("express");
const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

// Keep-alive web server
const app = express();
app.get("/", (req, res) => res.send("Bot is running."));
app.listen(3000, () => console.log("✅ Keep-alive server running on port 3000."));

// Discord bot setup
const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log(`🤖 Logged in as ${client.user.tag}`);
});

client.login(process.env.TOKEN);
