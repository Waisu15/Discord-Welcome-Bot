const Discord = require("discord.js");
const moment = require("moment");
const chalk = require("chalk");

let waisu;
const register = "RegisterRoleID";
const unregistered = "UnregisteredRoleID";
const tokens = ["BotToken1", "BotToken2", "BotToken3", "BotToken4", "BotToken5"]; // İstediğin Kadar Arttırabilirsin!
const channels = ["ConfirmationChannelsID1", "ConfirmationChannelsID2", "ConfirmationChannelsID3", "ConfirmationChannelsID4", "ConfirmationChannelsID5"]; // İstediğin Kadar Arttırabilirsin!

for(let index = 0; index < tokens.length; index++) {

const client = new Discord.Client();

client.on("ready", async () => {
waisu = await client.channels.cache.get(channels[index]).join();
client.user.setPresence({ activity: { name: `Waisu Welcome Bots` }, status: `dnd` });
console.log(chalk `{greenBright [${moment().format('YYYY-MM-DD HH:mm:ss')}]} {red ${client.user.username}} İsmiyle {blueBright ${client.channels.cache.get(channels[index]).name}} Adlı Kanala Giriş Yapıldı!`);
});

client.on("voiceStateUpdate", async (olds, news) => {

if(news.member.id === client.user.id) waisu = await client.channels.cache.get(channels[index]).join();

let confirmation = client.channels.cache.get(channels[index]); 
confirmation.join().then(connection => { 
    
if(news.channelID === channels[index]) {
if(news.member.roles.cache.get(unregistered)) {

const last = connection.play("./sound/hg.mp3");
last.on("end", () => {
last.destroy();
return;
});
};

if(news.member.permissions.has("ADMINISTRATOR") || news.member.roles.cache.get(register)) {
const last = connection.play("./sound/yetkili.mp3");
last.on("end", () => {
last.destroy();
return;
});
};

};
});
});

client.login(tokens[index]);
};
