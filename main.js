/* 13.12.2022 AHMET AK */
const dhcp = require('dhcp');
const http = require('http');
const fs = require('fs');
const path = require('path')

var winx = null;

const start_string = '<SOAP-ENV:Envelope xmlns:SOAP="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:cwmp="urn:dslforum-org:cwmp-1-0" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' +
'<SOAP-ENV:Header>' +
'<cwmp:ID SOAP:mustUnderstand="1">1</cwmp:ID>' +
'<cwmp:NoMoreRequest>0</cwmp:NoMoreRequest>' +
'</SOAP-ENV:Header>' +
'<SOAP-ENV:Body>' +
'<cwmp:InformResponse><MaxEnvelopes>1</MaxEnvelopes></cwmp:InformResponse></SOAP-ENV:Body></SOAP-ENV:Envelope>';

var counter = 0;
/* WEB SERVER START */ 
const requestListener = function (req, res) {
  console.log(req.url, req.headers, req.headers['cookie']);
  if(req.headers['cookie'] === undefined){//
    res.writeHead(200, {'Content-Type': 'text/xml', 'Content-Length': start_string.length, 'Server': 'lighttpd/1.4.45', 'Set-Cookie': ['session=' + Date.now()]});
  }else{
    res.writeHead(200, {'Content-Type': 'text/xml'});
  }
  
  if(req.headers['cookie'] === undefined){
    res.end(start_string);
    winx.send('status:title', "Adım 2 : WEB Server")
  }else{
    res.end('<SOAP-ENV:Envelope xmlns:SOAP="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:cwmp="urn:dslforum-org:cwmp-1-0" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><SOAP-ENV:Header><cwmp:ID SOAP:mustUnderstand="1">1</cwmp:ID><cwmp:NoMoreRequest>0</cwmp:NoMoreRequest></SOAP-ENV:Header><SOAP-ENV:Body><cwmp:SetParameterValues><ParameterList>'+

      '<ParameterValueStruct><Name>InternetGatewayDevice.X_TT.Configuration.Shell.Enable</Name><Value xsi:type="xsd:boolean">1</Value></ParameterValueStruct>'+
      '<ParameterValueStruct><Name>InternetGatewayDevice.X_TT.Configuration.Shell.Password</Name><Value xsi:type="xsd:string">Gibirnet123</Value></ParameterValueStruct>'+
      '<ParameterValueStruct><Name>InternetGatewayDevice.X_ZTE-COM_SSH.Enable</Name><Value xsi:type="xsd:boolean">1</Value></ParameterValueStruct>'+
      '<ParameterValueStruct><Name>InternetGatewayDevice.X_ZTE-COM_SSH.UserName</Name><Value xsi:type="xsd:string">root</Value></ParameterValueStruct>'+
      '<ParameterValueStruct><Name>InternetGatewayDevice.X_ZTE-COM_SSH.Password</Name><Value xsi:type="xsd:string">Gibirnet123</Value></ParameterValueStruct>'+
      '<ParameterValueStruct><Name>InternetGatewayDevice.X_TT.Users.User.2.Enable</Name><Value xsi:type="xsd:boolean">1</Value></ParameterValueStruct>'+
      '<ParameterValueStruct><Name>InternetGatewayDevice.X_TT.Users.User.2.Username</Name><Value xsi:type="xsd:string">root</Value></ParameterValueStruct>'+
      '<ParameterValueStruct><Name>InternetGatewayDevice.X_TT.Users.User.2.Password</Name><Value xsi:type="xsd:string">Gibirnet123</Value></ParameterValueStruct>'+

      '<ParameterValueStruct><Name>InternetGatewayDevice.LANDevice.1.WLANConfiguration.5.Enable</Name><Value xsi:type="xsd:boolean">1</Value></ParameterValueStruct>'+
      '<ParameterValueStruct><Name>InternetGatewayDevice.LANDevice.1.WLANConfiguration.5.AutoChannelEnable</Name><Value xsi:type="xsd:boolean">1</Value></ParameterValueStruct>'+
      '<ParameterValueStruct><Name>InternetGatewayDevice.LANDevice.1.WLANConfiguration.5.SSID</Name><Value xsi:type="xsd:string">GIBIRNET-5GHZ</Value></ParameterValueStruct>'+
      '<ParameterValueStruct><Name>InternetGatewayDevice.LANDevice.1.WLANConfiguration.5.KeyPassphrase</Name><Value xsi:type="xsd:string">GIBIRNET@2022</Value></ParameterValueStruct>'+
      '<ParameterValueStruct><Name>InternetGatewayDevice.LANDevice.1.WLANConfiguration.5.PreSharedKey.1.KeyPassphrase</Name><Value xsi:type="xsd:string">GIBIRNET@2022</Value></ParameterValueStruct>'+

      '<ParameterValueStruct><Name>InternetGatewayDevice.LANDevice.1.WLANConfiguration.2.Enable</Name><Value xsi:type="xsd:boolean">1</Value></ParameterValueStruct>'+
      '<ParameterValueStruct><Name>InternetGatewayDevice.LANDevice.1.WLANConfiguration.2.AutoChannelEnable</Name><Value xsi:type="xsd:boolean">1</Value></ParameterValueStruct>'+
      '<ParameterValueStruct><Name>InternetGatewayDevice.LANDevice.1.WLANConfiguration.2.SSID</Name><Value xsi:type="xsd:string">GIBIRNET-24GHZ</Value></ParameterValueStruct>'+
      '<ParameterValueStruct><Name>InternetGatewayDevice.LANDevice.1.WLANConfiguration.2.KeyPassphrase</Name><Value xsi:type="xsd:string">GIBIRNET@2022</Value></ParameterValueStruct>'+
      '<ParameterValueStruct><Name>InternetGatewayDevice.LANDevice.1.WLANConfiguration.2.PreSharedKey.1.KeyPassphrase</Name><Value xsi:type="xsd:string">GIBIRNET@2022</Value></ParameterValueStruct>'+

//      '<ParameterValueStruct><Name>InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANPPPConnection.1.X_ZTE-COM_IPMode</Name><Value xsi:type="xsd:string">3</Value></ParameterValueStruct>'+
      
      '</ParameterList><ParameterKey/></cwmp:SetParameterValues></SOAP-ENV:Body></SOAP-ENV:Envelope>');  

    setTimeout(function(){
      winx.send('status:title', "Adım 4 TAMAM : Cihazı Sökebilirsiniz.")
    }, 10000);
      winx.send('status:title', "Adım 3 : WEB SERVER 2.")
    counter++;
  }

  console.log(counter);
}

const server = http.createServer({keepAlive: false}, requestListener);
server.keepAliveTimeout = 0;
/* WEB SERVER END */ 

/* DHCP SERVER START */ 
dhcp.addOption(138, {
  attr: "testConfig",
  config: "testConfig",
  type: "ASCII",
  name: "Test Option"
});
dhcp.addOption(125, {
  config: "testConfig",
  type: "ASCII",
  name: "Test Option"
});

dhcp.addOption(43, {
  config: "zteconfig",
  type: "UInt8s",
  name: "Test Option",
default: Array.from(Uint8Array.from(Buffer.from('0124687474703A2F2F31302E3131362E31332E32312F63776D705765622F57474350454D6774','hex')))
});

var s = dhcp.createServer({
  // System settings
  range: [
    "10.116.13.10", "10.116.13.20"
    ],
  forceOptions: ['hostname', 'zteconfig'], // Options that need to be sent, even if they were not requested
  randomIP: false, // Get random new IP from pool instead of keeping one ip
  static: {
  },
  netmask: '255.255.255.0',
  router: [
    '10.116.13.21'
    ],
  dns: ["45.12.55.55", "45.12.55.56"],
  hostname: "GIBIRNet",
  broadcast: '10.116.13.255',
  server: '10.116.13.21', // This is us
  bootFile: function (req, res) {

  }
});

s.on('message', function (data) {
  winx.send('status:title', "Adım 1 Tamam : DHCP Server IP Verdi")
});
/* DHCP CLIENT END */ 

const { app, ipcMain, BrowserWindow, Menu } = require('electron')

Menu.setApplicationMenu(false)

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  winx = win;
  win.setMenuBarVisibility(false)

  ipcMain.handle('control:start', () => {
    setTimeout(function(){
      server.listen(80);
    }, 10);
    s.listen();
    console.log("start");
    win.send('status:title', "Sunucular Başlatıldı!")
  })

  ipcMain.handle('control:stop', () => {
  	console.log("stop");
  })

  ipcMain.handle('control:restart', () => {
  	console.log("restart");
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})