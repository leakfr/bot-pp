  const Discord = require('discord.js')
const client  = new Discord.Client()
const config = require('./config.json')
client.on('ready', async () => {
setInterval(() => {
  let guild = client.guilds.cache.get(config.guild)
  if(!guild) return console.log('Guild introuvable')
    let channel = guild.channels.cache.get(config.salon)
    if(!channel) return console.log('Salon introuvable')
    if(channel) {  
const user = client.users.cache.random()
if(user.bot) return;
const embed = new Discord.MessageEmbed()
.setImage(user.displayAvatarURL({ dynamic : true  }))
.setColor(`#2f3136`)

channel.send(embed);
}


}, 20000)})
client.login(config.token)
