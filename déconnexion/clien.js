$("#disconnectButton").click(function() { 
    socket.emit("disconnect"); 
}); 