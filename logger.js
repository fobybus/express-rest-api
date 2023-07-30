function log(message) {
    var file = require("fs");
    file.appendFile("access_log.txt", message, function (error) {
        if (error)
            console.log("log failed ,unable to open log file");
    });

}

exports.log = log;