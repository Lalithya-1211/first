var http = require('http');
http.createServer(function (req, res) {
    res.write('Hello, I am live');
    res.end();
}).listen(8040);
console.log('Server running at 8040');