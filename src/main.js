const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}
const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      devTools: false
    },
    width: 300,
    height: 500,
    autoHideMenuBar: true,
    resizable: false,
  });
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
//   mainWindow.webContents.openDevTools();
};
app.on('ready', createWindow);
//osx implementation
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
ipcMain.on('kill', () => {
  app.quit()
})