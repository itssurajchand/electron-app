const {createWindow} = require('./main')
const {app} = require('electron')

app.allowRendererProcessReuse = true;
app.whenReady().then(createWindow)