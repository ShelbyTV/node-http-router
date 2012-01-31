var http = require('http'),
httpProxy = require('./node-http-proxy');
var opts = {
  router : {
    'hackday.tv':'127.0.0.1:3005',
    'dev.shelby.tv':'127.0.0.1:3000',
    'api.shelby.tv/v1':'127.0.0.1:3001',
    'api.shelby.tv/v2':'127.0.0.1:3006'
  }
};

var port = 80;
var proxy = httpProxy.createServer(opts);
proxy.listen(port);
console.log('Router listening on port '+port);
