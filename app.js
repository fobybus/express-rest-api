var logger = require("./logger.js");
var express = require("express");
//testing out express 
var app = express();
//logging every request
app.use(function (req, res, next) {
    var method = req.method;
    var path = req.path;
    // var query = req.query;
    logger.log(method + "\t" + path + "\n");
    console.log(method + "\t" + path + "\n");
    next();
});

app.get('/index.html', require("./indexcontroller.js").indexc);
app.get('/', require("./indexcontroller.js").indexc);
app.get('/student', require("./studentcontroller.js").student);
app.post('/index.html', require("./indexcontroller.js").indexc);
app.post('/', require("./indexcontroller.js").indexc);
app.post('/student', require("./studentcontroller.js").student);


server = app.listen(8080, function () {
    console.log("listening on " + server.address().address + ":" + server.address().port);
});