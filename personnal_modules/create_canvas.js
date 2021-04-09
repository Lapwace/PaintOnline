const sdb = new SimpleDrawingBoard(document.getElementById('canvas'), {
    lineColor:    '#000',
    lineSize:     5,
    boardColor:   'transparent',
    historyDepth: 10
  });


sdb.ev.on('drawBegin', () => {
    sdb.getImg('./image/img.png')
    console.log("starte")
})

sdb.ev.on('draw', () => {
    console.log("C'est inc")
})

sdb.ev.on('drawEnd', () => {
    sdb.setImg('./image/img.png', true)
    console.log("end")
})