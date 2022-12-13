const { contextBridge, ipcRenderer } = require('electron')

ipcRenderer.on('status:title',(event,message)=>{
  const statusBanner = document.getElementById('status')
  statusBanner.innerText = message;
});

contextBridge.exposeInMainWorld('control', {
  start: () => ipcRenderer.invoke('control:start'),
  stop: () => ipcRenderer.invoke('control:stop'),
  reset: () => ipcRenderer.invoke('control:reset'),
})