var connect = require('connect');
connect.createServer(
    connect.static('build')
).listen(3030);