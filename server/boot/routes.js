var app = require('../../server/server'); //require `server.js` as you would normally do in any node.js app
var loopback = require('loopback');

var ds = app.dataSources.mongo;


module.exports = function(app) {
  // Install a `/` route that returns server status
  // var router = server.loopback.Router();
  // router.get('/', server.loopback.status());
  // server.use(router);
  app.use(loopback.static('public'));

  app.get('/start',function(req,res){
  		console.log("got requrest from start");
  		res.send("Welcome to Ever");
  })
};
