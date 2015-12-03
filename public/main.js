  var socket = io.connect('http://52.9.34.48:8888');
  console.log('connected')

  var interval = setInterval(ping, 5)

  function ping(){
    socket.emit('ping', +new Date())
  }

  socket.on('pong', function (data){
    console.log((+new Date()) - data.time)
  })