/**
 * 
 * @para {Client} client - The discord.js client.
 * 
 */

    module.exports = function(client){

        client.on('message', message =>{
            var nom = message.author.username;
          if(message.content === 'ping') {
	              // sa envoie pong
            message.channel.send('pong');
            console.log('"ping" mis par: '+ nom);
            }

            if(message.content === 'Ping') {
            	// sa envoie C'est ping sans maj fdp
                message.channel.send('C\'est ping sans maj fdp');
                console.log('"Ping" mis par: '+ nom);
            }

            if(message.content === 'PONG') {
            	// sa envoie TG PONG
                message.channel.send('TG PONG');
                console.log('"PONG" mis par: '+ nom);
            }

            if(message.content === 'PING') {
            	// sa envoie PONG
                message.channel.send('PONG');
                console.log('"PING" mis par: '+ nom);
            }

        })}
