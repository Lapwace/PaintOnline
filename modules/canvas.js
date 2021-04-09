const board = document.querySelector("#board")
const ctx = board.getContext("2d")
var canvas = document.getElementById("board");

window.addEventListener("load", () =>{
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
    }

    const draw = (e) => {
        if(!drawing) return;
        ctx.lineWidth = 10
        ctx.lineCap = "round"
        ctx.strokeStyle = "black"

        ctx.lineTo(e.clientX-10, e.clientY-10)
        ctx.stroke()

    }

    board.addEventListener("mousedown", startDrawing)
    board.addEventListener("mouseup", stopDrawing)
    board.addEventListener("mousemove", draw)
})
download_img = function(el) {
    var image = canvas.toDataURL("image/jpg");
    el.href = image;
  };