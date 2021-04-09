const socket = io()
const board = document.querySelector("#board")
const ctx = board.getContext("2d")
const canvas = document.getElementById("board")
var canvas_ctx = canvas.getContext('2d')
let data = 

socket.on("connect", (e) =>{
    socket.emit("start_connect")
})

window.onload = () => {
    board.height = 500
    board.width = 500

    let drawing = false
    
    const startDrawing = () => {
        drawing = true
        draw()
    }

    const stopDrawing = () => {
        drawing = false
        ctx.beginPath()
        data = canvas.toDataURL("data:image/png")
        socket.emit("submit_canvas", data)
    }

    const draw = (e) => {
        if(!drawing) return;
        ctx.lineWidth = 10
        ctx.lineCap = "round"
        ctx.strokeStyle = "black"

        ctx.lineTo(event.clientX-10, event.clientY-10)
        ctx.stroke()

    }

    board.addEventListener("mousedown", startDrawing)
    board.addEventListener("mouseup", stopDrawing)
    board.addEventListener("mousemove", draw)

    socket.on("data_canvas", (data_canvas) =>{
        data = data_canvas
        document.getElementById("preview").innerHTML="<img src='"+data+"'>"
    })
}
