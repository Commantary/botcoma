/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */
const discord = require('discord.js');
module.exports = function(client){

    client.on('message', message =>{
        if(message.content === 'ez') {
            client.user.setGame('ez');
        }
    })
}