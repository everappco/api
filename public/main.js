  var socket = io.connect('http://52.9.34.48:8888');
  console.log('connected')

  var interval = setInterval(ping, 100)

  function ping(){
    socket.emit('ping', +new Date())
  }

  socket.on('pong', function (data){
    console.log((+new Date()) - data.time)
  })

  var windowInt = setInterval(open, 300)

var ct = 0
  function open(){
  	if (ct < 1){
	    window.open('http://52.8.245.23:3000', '_blank')
	    ct++
	}
	else {
		clearInterval(windowInt)
	}
  }