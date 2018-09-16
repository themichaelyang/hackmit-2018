const { app, BrowserWindow, TouchBar } = require('electron')
const { TouchBarLabel, TouchBarButton, TouchBarSpacer } = TouchBar

app.once('ready', () => {
  const window = new BrowserWindow({
    width: 200,
    height: 200
  })
  window.loadURL(`file://${__dirname}/index.html`)
  
  const touchBarItems = createTouchBarItems()
  window.setTouchBar(new TouchBar(touchBarItems))
})

function createTouchBarItems() {
  const touchBar = []
  for (let i = 0; i < 36; i++) {
    touchBar.push(new TouchBarLabel({ 
      label: (i % 10).toString()
    }))
  }
  return touchBar
}