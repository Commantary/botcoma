// Mise en place des en tetes
const discord = require('./discord.js');
const client = new discord.Client();
const token = "MzQ2OTI1NTgwNDU5MDQ4OTYw.DHS6Ng.Wthay4iV4BNKMahxQyjVPHEN_H4"
var prefix = ('+');
var mention = '<@346925580459048960>';
var servercount = client.guilds.size;


// On start le bot
client.on("ready", () => {
	client.user.setPresence({ game: { name: 'Prêt à l\'utilisation', type: 0 } });
	console.log ("-------------------------------------");
	console.log('    [!] ComaBot connecté [!]');
	console.log ("-------------------------------------");
}); 
// Create an event listener for new guild members


client.on('message', message =>{
	// Mon code ici
    let adminrole = message.guild.roles.find("name", "Anti-modo");
    let modorole = message.guild.roles.find("name", "Modo");
	message.lastMessage
	//Variable d'environnement

  const voiceConnection = message.member.voiceConnection;
  const voiceChannel = message.member.voiceChannel;

//Traitement


if(message.content === '12345') {
// Edit the guild name
guild.setName('Discord Guild')
.then(updated => console.log(`Updated guild name to ${guild.name}`))
.catch(console.error);
}
})

/* Partie Ping */
const ping = require('./module/ping.js');
ping(client);

/* Partie Avatar */
const avatar = require('./module/avatar.js');
avatar(client);

/* Partie Musique */
const music = require('./discord.js-music-v11');
music(client);

/* Partie Message Aux Gens */
const message1 = require('./module/message_personne.js');
message1(client);

/* Partie Say */
const say = require('./module/say.js');
say(client);

/* Partie cpasmoi */
const cpasmoi = require('./module/cpasmoi.js');
cpasmoi(client);

/* Partie Verif Role */
const verifrole = require('./module/verifrole.js');
verifrole(client);

/* Partie Help */
const help = require('./module/help.js');
help(client);

/* Partie Kick 
const kick = require('./module/kick.js');
kick(client);*/

/* Partie Teste1 */
const test1 = require('./module/test1.js');
test1(client);

client.login(token)
