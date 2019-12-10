var http = require('http');

var app = http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify({
        a: 1
    }));
});
app.listen(3000);