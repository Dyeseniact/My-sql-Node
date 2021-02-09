
//objeto utilizado para la comunicacion
var socket = io();

//que me diga cuando tenga comunicacion (un canal abierto)
//Aplicacion perdiente al backend
socket.on('connect', function(){
    console.log('Conectando al servidor');
});

socket.on('disconnect',function(){
    console.log('Perdimos Comunicaciòn con el Servidor');
});

//Los emit son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp){
    console.log('Respuesta Server:', resp);
});

//escuchar informacion
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor:', mensaje)
});
