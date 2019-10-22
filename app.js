const express = require("express");
const app = express();
const fs = require("fs");
app.use(function(request, response, next) {

    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
    console.log(data);
    fs.appendFile("server.log", data + "\n", function() {});
    next();
});

app.get("/", function(request, response) {
     app.use(express.static(__dirname)); 
    response.sendFile(__dirname + "/index.html");
});
app.get("/ALEO/aleo.html", function(request, response) {
    app.use(express.static(__dirname + "/ALEO"));
    response.sendFile(__dirname + "/ALEO/aleo.html");
});
app.get("/modus-versus/modusversus.html", function(request, response) {
    app.use(express.static(__dirname + "/modus-versus"));
    response.sendFile(__dirname + "/modus-versus/modusversus.html");
}); 
app.get("/CleanMag/cleanmag.html", function(request, response) {
    app.use(express.static(__dirname + "/CleanMag"));
    response.sendFile(__dirname + "/CleanMag/cleanmag.html");
});
app.get("/webfolio/web.html", function(request, response) {
    app.use(express.static(__dirname + "/webfolio"));
    response.sendFile(__dirname + "/webfolio/web.html");
});
app.listen(3000);