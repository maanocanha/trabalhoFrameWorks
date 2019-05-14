var express = require('express')
var app = express()
require("dotenv-safe").load()

var UsersController = require("./app/controllers/UsersController")
var LoginController = require("./app/controllers/LoginController")
var DestinosController = require("./app/controllers/DestinosController")

app.use("/destino", DestinosController)
app.use("/users", UsersController)
app.use("/login", LoginController)

app.listen(3000, function() {
    console.log("Servidor ouvindo na porta 3000!")
})
app.get("/", function (req, res) {
    res.send("Hey, I am responding to your request!");
   });