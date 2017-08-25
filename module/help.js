/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

module.exports = function(client){
    
            client.on('message', message =>{
                if(message.content === '+help') {
                message.channel.send('**C\'est quoi mon avatar** : Pour avoir son avatar \n\n**+admin** : Pour savoir si tu as le role Anti-Modo \n\n**+modo** : Pour savoir si tu as le role Modo \n\n**Mentionne moi** : Le bot te mentionneras comme sa tu auras un ami :heart: \n\n**ping/PING/Ping/PONG** : <mystere> \n\n**Diego** : Dedicace aux :100: \n\n**Freez** : Dedicace aux :100: \n\n**Golden** : Dedicace aux :100: \n\n**c pas moi** : te réferencer aux #commandes-comabot pour savoir tout sur cela \n\nD\'autre commandes sont en dévelopement...')
                console.log('"+help" mis par: ' + message.author.username);
            }
            })
        }