const socket = io();

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

const checkSocketStatus = () => {
    console.log("estado del socket: ", socket.connected)
}