function indexc(req, res) {
    res.set("Content-Type", "text/html");
    res.send("<h1>hello from the index page!</h1>");
    res.end();

}

module.exports.indexc = indexc;