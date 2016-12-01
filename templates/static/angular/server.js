/**
 * Created by jesuscc29 on 1/12/16.
 */

var express = require('express');
var server = express();
server.use(express.static(__dirname));

var port = process.env.PORT || 8081;
server.listen(port);
console.log('Server running on port ' + port + '...');

exports = module.exports = server;