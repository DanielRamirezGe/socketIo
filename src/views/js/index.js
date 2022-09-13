const socket = io();

socket.on("welcome", data => {
    console.log(data)
})

const sendEventSer = document.querySelector("#sendEvent")

sendEventSer.addEventListener("click", () => {
    socket.emit("serverSend", "data String enviado")
})


socket.on("connect", () => {
    console.log("El socket se ha conectado ", socket.id)
    checkSocketStatus()
})

socket.on("disconnect", ()=>{
    console.log("el socket se ha desconectado")
    checkSocketStatus()
})

socket.io.on("reconnect_attempt", () => {
    console.log("Intentando conectar ...")
})


socket.io.on("reconnect", () => {
    console.log("Conectar de nuevo")
})

socket.on("connect_error", () => {
    console.log("maloo")
})

socket.on("everyone", (data) => {
    numberConnected.textContent = data
})

const checkSocketStatus = () => {
    console.log("estado del socket: ", socket.connected)
}