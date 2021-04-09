const express = require("express")
const path = require("path")
const app = express()
const http = require("http").createServer(app)
const io = require("socket.io")(http)
app.use(express.static(path.join(__dirname)))
app.get("/", (req, res) => {res.sendFile(__dirname + "/index.html")})

http.listen(3000, () => {
    console.log("Server start")
})