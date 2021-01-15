'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "a!";
client.setMaxListeners(1000)

//help
client.on('message', msg => {
    if (msg.content.startsWith(prefix + "help")) {
      msg.delete();
      
      var embed = new Discord.MessageEmbed()
        .setTitle('**Help**')
        .setAuthor("r/Apple Fr" , "https://cdn.discordapp.com/icons/786842731434606602/a_8f2c72e5a82f57b7a6fc9c84591d75f0.gif")
        .setThumbnail(msg.guild.iconURL({dynamic : true}))
        .setColor("009ff")
        .addField("__Géneral__" ,"`a!help` , `ping`")
        .addField("__Modération__" , "`t!mp`")
        .setTimestamp()
        .setFooter(`demandé par ${msg.author.username}` , (msg.author.displayAvatarURL({dynamic : true})))
      msg.channel.send(embed);
    }
});

//message en dm
client.on("message", message => {
    let args = message.content.trim().split(/ +/g) 
    if(args[0].toLowerCase() === prefix + "mp"){
  message.delete()
    if(message.author.bot)return;
    if(!message.member.hasPermission("ADMINISTRATOR"))return message.reply("Vous n'avez pas la permission de faire cette commande").then(msg => msg.delete({timeout: 10000}))
          let msg = args.slice(2).join(" ")
          let user = message.mentions.members.first()
    if(!user)return message.channel.send("Veuillez mentionner un utilisateur").then(msg => msg.delete({timeout: 10000}))
  
         if(!msg)return message.reply("Veuillez indiquer du texte").then(msg => msg.delete({timeout: 10000}))
  
         var embed = new Discord.MessageEmbed()
         .setAuthor("r/Apple Fr" , (message.guild.iconURL({dynamic : true})))
         .setTitle("**Vous avez reçu un message de __r/Apple Fr__**")
         .setDescription(msg)
         .setThumbnail(message.guild.iconURL({dynamic : true}))
         .setColor("009ff")
         .setTimestamp()
         .setFooter(`message envoyé par ${message.author.username}` , (message.author.displayAvatarURL({dynamic : true})))
         user.send(embed)
         }
});

//ping
client.on('message', message => {
    if (message.content === 'ping') {
      message.channel.send('pong');
    }
});

client.on('ready', () => {
    console.log(`Connecté sur ${client.user.tag}!`);
    setInterval(async () => {
        client.user.setActivity(`a!help • Surveille r/Apple Fr`, {type: "PLAYING"}, { 
        type: "PLAYING",
        })
        }, 10000);
});

client.login('Nzk5NzAxMzAxNTc1MTU1NzMy.YAHZ4A.HzOdwYCrEgyPWCgMFzrwvFDV0xM');
