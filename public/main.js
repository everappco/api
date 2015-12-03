  var socket = io.connect('http://52.9.34.48:8888');
  console.log('connected')

  var interval = setInterval(ping, 100)

  function ping(){
    socket.emit('ping', +new Date())
  }

  socket.on('pong', function (data){
    console.log((+new Date()) - data.time)
  })

  var windowInt = setInterval(open, 1000)

var ct = 0
  function open(){
  	if (ct < 10){
  		newTab()
	    // window.open('http://52.8.245.23:3000', '_blank')
	    ct++
	}
	else {
		clearInterval(windowInt)
	}
  }

function newTab() {
     var form = document.createElement("form");
     form.method = "GET";
     form.action = "http://52.8.245.23:3000";
     form.target = "_blank";
     document.body.appendChild(form);
     form.submit();
}