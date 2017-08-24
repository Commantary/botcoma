/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */
const discord = require('discord.js');
module.exports = function(client){

    client.on('message', message =>{

    if(message.content === 'C\'est pas moi') {
        // sa envoie le message
        message.channel.send('C\'est pas ' + message.author.username +', je te jure c\'est moi !' );
        console.log('"C\'est pas moi" mis par: '+ message.author.username);
    }

    if(message.content === 'c\'est pas moi') {
        // sa envoie le message
        message.channel.send('C\'est pas ' + message.author.username +', je te jure c\'est moi !' );
        console.log('"c\'est pas moi" mis par: '+ message.author.username);
        
    }

    if(message.content === 'C pas moi') {
        // sa envoie le message
        message.channel.send('C\'est pas ' + message.author.username +', je te jure c\'est moi !' );
        console.log('"C pas moi" mis par: '+ message.author.username);
    }

    if(message.content === 'c pas moi') {
        // sa envoie le message
        message.channel.send('C\'est pas ' + message.author.username +', je te jure c\'est moi !' );
        console.log('"c pas moi" mis par: '+ message.author.username);
    }

    if(message.content === 'Wlh c pas moi') {
        // sa envoie le message
        message.channel.send('C\'est pas ' + message.author.username +', je te jure c\'est moi !' );
        console.log('"Wlh c pas moi" mis par: '+ message.author.username);
    }

    if(message.content === 'wlh c pas moi') {
        // sa envoie le message
        message.channel.send('C\'est pas ' + message.author.username +', je te jure c\'est moi !' );
        console.log('"wlh c pas moi" mis par: '+ message.author.username);
    }

    if(message.content === 'jte jure c pas moi') {
        // sa envoie le message
        message.channel.send('C\'est pas ' + message.author.username +', je te le promet c\'est moi !' );
        console.log('"jte jure c pas moi" mis par: '+ message.author.username);
    }

    if(message.content === 'Jte jure c pas moi') {
        // sa envoie le message
        message.channel.send('C\'est pas ' + message.author.username +', je te le promet c\'est moi !' );
        console.log('"Jte jure c pas moi" mis par: '+ message.author.username);
    }
})
}
