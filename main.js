const { app, BrowserWindow, TouchBar } = require('electron')
const { TouchBarLabel, TouchBarButton } = TouchBar

let shoot = false
const fps = 30

app.once('ready', () => {
  const window = new BrowserWindow({
    width: 200,
    height: 200
  })
  window.loadURL(`file://${__dirname}/index.html`)
  
  const touchBarItems = createTouchBarItems()
  const touchBar = new TouchBar(touchBarItems)
  touchBar.escapeItem = new TouchBarButton({label: '︻デ═一 ', click: handleClick })
  window.setTouchBar(touchBar)
  setTimeout(() => {
    run(touchBarItems)
  }, 1000 / fps)
})

function handleClick() {
  shoot = true
}

function createTouchBarItems() {
  const touchBarItems = []
  for (let i = 0; i < 48; i++) {
    touchBarItems.push(new TouchBarLabel({ 
      label: ' '
    }))
  }
  return touchBarItems
}

function run(touchBarItems) {
  update(touchBarItems)
    setTimeout(() => {
    run(touchBarItems)
  }, 1000 / fps)
}

function update(touchBarItems) {
  for (let i = touchBarItems.length - 1; i >= 1; i--) {
    touchBarItems[i].label = touchBarItems[i - 1].label
  }
  if (shoot) {
    touchBarItems[0].label = '◦'
  }
  else {
    touchBarItems[0].label = ' '
  }
  shoot = false
}