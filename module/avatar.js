/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function(client){
    
            client.on('message', message =>{
                if (message.content.startsWith('C\'est quoi mon avatar')){
                    // On envoie son avatar
                    message.reply(message.author.avatarURL);
                    console.log('Nom du proprio de l\'avatar: ' + message.author.username);
                }
                if (message.content === 'Avatar ComaBot') {
                    message.channel.send('C\'est quoi mon avatar');
                }
            })
        }