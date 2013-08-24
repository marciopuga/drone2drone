var ioclient = require('socket.io-client'),
socketclient = ioclient.connect('nowengine.jit.su', {
    port: 80
});
socketclient.on('connect', function () {
	console.log("socketclient connected"); 
	socketclient.emit('init_broadcaster', new Date() + " hello?")

	// socketclient.on("response", function(data) {
	// 	console.log('response', new Date() + " " + data)
	// })
	socketclient.on("broadcaster_logging", function(data) {
		console.log('broadcaster_logging', new Date() + " " + data)
	})
	socketclient.on("photo_approved", function(photo) {
		console.log('photo_approved', new Date() + " " + photo)
	})
});

