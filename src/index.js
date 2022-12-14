const express = require("express")
const { createServer } = require("http")
const path = require("path")
const { Server } = require("socket.io")

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

app.use( express.static(path.join(__dirname, "views")))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

io.on("connection", socket =>{
    console.log("clientes conectados", io.engine.clientsCount)
    console.log(socket.id)

    socket.on("disconnect", () => {
        console.log("se deconecto ", socket.id)
    })

    socket.conn.once("upgrade", () => {
        console.log("hemos pasado a ", socket.conn.transport.name)
    })

    socket.emit("welcome", "Ahora estas conectado")

    socket.on("serverSend", data => {
        console.log(data)
    })
    //emision a todos
    io.emit("everyone", "se conecto el cliente " + socket.id + " en total van: " + io.engine.clientsCount)

})

httpServer.listen(3000)


