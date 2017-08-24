// Mise en place des en tetes
const discord = require('./discord.js');
const client = new discord.Client();
const token = "MzQ2OTI1NTgwNDU5MDQ4OTYw.DHS6Ng.Wthay4iV4BNKMahxQyjVPHEN_H4"
var prefix = ('+');
var mention = '<@346925580459048960>';
var servercount = client.guilds.size;


// On start le bot
client.on("ready", () => {
	client.user.setGame('En Dev...');
	console.log ("-------------------------------------");
	console.log('    [!] ComaBot connecté [!]');
	console.log ("-------------------------------------");
});

client.on('message', message =>{
	// Mon code ici
    let adminrole = message.guild.roles.find("name", "Anti-modo");
    let modorole = message.guild.roles.find("name", "Modo");
	
	//Variable d'environnement

  const voiceConnection = message.member.voiceConnection;
  const voiceChannel = message.member.voiceChannel;

//Traitement
if(message.content.startsWith(prefix +'admin')){
	//2eme condition: vérification
	if(message.member.roles.has(adminrole)){
		//oui il a bien le role
		message.reply('GOOD ! Tu as bien le role ;)')
	} else {
		//non il y a pas
		message.reply('AH ! Tu ne l\'as pas :(');
	}
	console.log
  }
  if (message.content === '+s'){
	  client.user.setGame('message.content.substring(3)');
  }
	  

  if(message.content.startsWith(prefix + 'modo')){
	  if(message.member.roles.has(modorole.id)){
		  // Non ta pas
		  message.reply('Tu es modo :)');
	  } else {
		  // oui ta le role
		  message.reply('Tu n\'est pas modo');
	  }
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

/* Partie Teste1 */
const test1 = require('./module/test1.js');
test1(client);

client.login(token)