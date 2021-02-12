const io = require('socket.io')(3000);
console.log("we are in ")

// io.on('connection' , socket => {
//     console.log('New user')
//     socket.emit('chat-message' , 'Hello world')
//     socket.on('send-chat-message' , message =>{
//         socket.broadcast.emit('chat-message' , message )
//     })

// })

io.on('connection' , socket =>{
    console.log("we are in ")
    socket.emit('chat-message' , 'Hello world')
}

)



// port = 3000;
// io.listen(port, function() {
//   console.log("Server has started successfully");
// });
