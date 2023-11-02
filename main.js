// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require("electron");

if (require("electron-squirrel-startup")) app.quit();
const { exec } = require("child_process");
//const isDev = require("electron-is-dev");
const path = require("path");
const fs = require("fs");
const windowStateKeeper = require("electron-window-state");
let window;
require("events").EventEmitter.defaultMaxListeners = 0;
// without Babel in ES2015
const json_all = require('./constant');

let icon_image = path.join(__dirname, "./assets/images/icon.png");
/* if (fs.existsSync(icon_image)) {
  console.log('icon_image exist')
}else{
  console.log('icon_image not exist')
} */

function createWindow() {
  // Load the previous state with fallback to defaults
  let mainWindowState = windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 600,
  });
  let full_screen = json_all.DEBUG ? true : false
  // Create the browser window.
  window = new BrowserWindow({
    x: full_screen ? 0 : mainWindowState.x,
    y: full_screen ? 0 : mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    icon: icon_image,
    minWidth: full_screen ? 1400 : json_all.WIDTH,
    minHeight: full_screen ? 800 : json_all.HEIGHT,
    autoHideMenuBar: true,
    //fullscreen: true,
    //frame: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  // and load the index.html of the app.
  window.loadFile(`pages/index.html`, { query: { "logout": true } });

  // Event handler for asynchronous incoming messages
  ipcMain.on("goBackHomeBoi", async (event, arg) => {
    console.log("goBackHomeBoi");
    window.webContents.goBack();
    event.sender.send("WentBack", "Done");
  });

  // Open the DevTools.
  //
  if (json_all.DEBUG) {
    window.webContents.openDevTools();
  }
  //window.webContents.openDevTools();
  mainWindowState.manage(window);
}


require("@electron/remote/main").initialize();


app.on("browser-window-created", (_, window) => {
  require("@electron/remote/main").enable(window.webContents);
});
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});


const restartApp = () => {
  app.relaunch();
  app.exit();
};

module.exports = {
  restartApp,
  createWindow
};
