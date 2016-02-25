/* jshint node: true */
'use strict';

const electron         = require('electron');
const FileBin          = require('file-bin');

const app              = electron.app;
const BrowserWindow    = electron.BrowserWindow;
const emberAppLocation = `file://${__dirname}/dist/index.html`;
const dialog           = electron.dialog;
const ipc              = electron.ipcRenderer;

const openDirectory = function() {
  var files = dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory']
  });

  if (!files) { return; }

  console.log(files);
}

let mainWindow = null;
let filesystem = new FileBin(__dirname + '/notes', ['.txt', '.md', '.markdown']);

electron.crashReporter.start();

app.on('window-all-closed', function onWindowAllClosed() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function onReady() {
  mainWindow = new BrowserWindow({
          width: 800,
         height: 600,
    'min-width': 500,
    'min-height': 300
  });

  delete mainWindow.module;

  mainWindow.loadURL(emberAppLocation);

  mainWindow.webContents.on('did-fail-load', () => {
    mainWindow.loadURL(emberAppLocation);
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  exports.openDirectory = openDirectory;

});

exports.filesystem = filesystem;
