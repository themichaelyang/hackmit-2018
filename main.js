const { app, BrowserWindow, TouchBar } = require('electron')
const { TouchBarLabel, TouchBarButton, TouchBarSpacer } = TouchBar

let window

app.once('ready', () => {
  window = new BrowserWindow({
    width: 200,
    height: 200
  })
  window.loadURL(`file://${__dirname}/index.html`)
  // window.setTouchBar(touchBar)
})