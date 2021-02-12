const { BrowserWindow } = require('electron')
const { app } = require('electron')
const { Menu, MenuItem } = require('electron')
const { Notification } = require('electron')
const { win } = require('electron')
const path = require('path')
const { setThumbarButtons } = require('electron')

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();



function checkWiFi() {
  var xhr = new XMLHttpRequest();
  var file = "https://i.imgur.com/7ofBNix.png";
  var randomNum = Math.round(Math.random() * 10000);

  xhr.open('HEAD', file + "?rand=" + randomNum, true);
  xhr.send();

  xhr.addEventListener("readystatechange", processRequest, false);

  function processRequest(e) {
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status < 304) {
        console.log("WiFi connection found")

        const myNotification = new Notification('WebTools: WiFi Connection Check', {
          body: 'Your WiFi connection check results are: A WiFi connection was found.'
        })
      } else {
        const myNotification = new Notification('WebTools: WiFi Connection Check', {
          body: 'Your WiFi connection check results are: No WiFi connection was found.'
        })
      }
    }
  }
}


//build window
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
    
  })
  win.loadFile('index.html')
  win.setThumbarButtons([
    {
      tooltip: 'Check WiFi Connection',
      icon: path.join(__dirname, 'icons/wifi.svg'),
      click () { console.log('button1 clicked') }
    }, {
      tooltip: 'Check Internet Connection',
      icon: path.join(__dirname, 'button2.png'),
      flags: ['enabled', 'dismissonclick'],
      click () { console.log('button2 clicked.') }
    }
  ])


}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

//set user tasks
app.setUserTasks([
  {
    program: process.execPath,
    arguments: '--new-window',
    iconPath: process.execPath,
    iconIndex: 0,
    title: 'New Window',
    description: 'Create a new window'
  }
])




