const {io} = require('../server')
//para saber si se conectan al server 
io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicaciòn'
    } );

    // on es para escuchar suceso
    //notificar que el cliente se desconecta
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente

    client.on('enviarMensaje', (data, callback) => {
         console.log(data);
         //envia a todo el mundo que este conectado a la sesion
         client.broadcast.emit('enviarMensaje', {
             data
         });

    //     if(mensaje.usuario){
    //         callback({
    //             resp: 'Todo Salio Bien!'
    //         });
            
    //     } else {
    //         callback({
    //             resp: 'Todo Salio Mal!'
    //         });
    //     }
        

    });

    

});