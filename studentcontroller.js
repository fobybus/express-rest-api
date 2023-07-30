
function student(req, res) {
    //return all students 
    try {
        var data2 = require("fs").readFileSync("model.json");
        res.set('Content-Type', 'text/json');
        res.send(data2);
        res.end();
        console.log("sent all students");
    } catch (err) {
        console.log("error occured while opening a model " + err);
    }
}

module.exports.student = student;