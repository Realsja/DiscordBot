const Discord = require('discord.js');
const bot = new Discord.Client();
const botconfig = require('./botconfig.json');
const token = 'NDU4MTQzNjQ3MDQ5ODQyNjg4.DgjeFg.-OIe7dNs8QkhIdbFxn29rT7yPPk'; // Token used to register bot
//"apiKey": "AIzaSyC7SSDKkhzfkkeUjZ3qwNef9v0hpk6K3Hw",
bot.login('NDU4MTQzNjQ3MDQ5ODQyNjg4.DgjeFg.-OIe7dNs8QkhIdbFxn29rT7yPPk');

bot.on('ready', () => {
    console.log('Powering up the bass cannon');
  });

bot.on('message', (message) => {
    if(message.content == 'hey gambler') {
        message.channel.sendMessage('Aye, siwmae. And good day to you.');
    }
});

bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to 404 Error, ${member}`);
});

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(' ');
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === '!botinfo') { //took out ${prefix}
        let botembed = new Discord.RichEmbed()
        .setDescription('Bot Information')
        .setColor('#782eba')
        .addField('Bot Name:', bot.user.username);

        return message.channel.send(botembed);
    }

    if(cmd === '!rng') {
        var rng1 = Math.random()*100;
        var rng2 = Math.floor(rng1);
        message.channel.sendMessage('Random number between 1 and 100:');
        message.channel.sendMessage(rng2);
        return;

    }
});
