const socket = io()


socket.on("connect", (e) =>{
    socket.emit("start_connect")
})

window.onload = () => {
    
}

