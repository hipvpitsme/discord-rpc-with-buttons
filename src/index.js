var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
var killButton = document.getElementById('kill')
var clearButton = document.getElementById('clear')
var tutorialButton = document.getElementById('tutorial')
var clientid = document.getElementById('clientid')
var details = document.getElementById('details')
var largeImage = document.getElementById('large_image')
var largeText = document.getElementById('large_text')
var buttonsEnabled = document.getElementById('buttons_enabled')
var button1Enabled = document.getElementById('button1_enabled')
var button2Enabled = document.getElementById('button2_enabled')
var button1Label = document.getElementById('button1_label')
var button1Url = document.getElementById('button1_url')
var button2Label = document.getElementById('button2_label')
var button2Url = document.getElementById('button2_url')
const jsonFile = require('jsonfile')
const fs = require('fs')
const { ipcRenderer } = require('electron')
tutorialButton.addEventListener('click', ()=>{
    require('electron').shell.openExternal("https://github.com/hipvpitsme/discord-rpc-with-buttons")
})
clearButton.addEventListener('click', ()=>{
    buttonsEnabled.value = ""
    clientid.value = ""
    details.value = ""
    largeImage.value = ""
    largeText.value = ""
    button1Enabled.value = ""
    button1Label.value = ""
    button1Url.value = ""
    button2Enabled.value = ""
    button2Label.value = ""
    button2Url.value = ""
})
killButton.addEventListener('click', ()=>{
    ipcRenderer.sendSync('kill')
})
function configExist() {
    if(fs.existsSync('config.json')) {
        return true
    } else {
        fs.createWriteStream('config.json')
        const obj = { 
            clientid: "804405037953450014",
            buttons_enabled: "false",
            details: "Made by hipvpitsme",
            large_image: "smile",
            large_text: "Made by hipvpitsme",
            buttons: {
                button1: {
                    enabled: "false",
                    label: "Made by hipvpitsme",
                    url: "https://www.github.com/hipvpitsme"
                },
                button2: {
                    enabled: "false",
                    label: "Made by hipvpitsme1",
                    url: "https://www.github.com/hipvpitsme"
                }
            }
         }
        jsonFile.writeFileSync('config.json', obj)
    }
}
function writeBare() {
    const obj = { 
        clientid: "804405037953450014",
        buttons_enabled: "false",
        details: "Made by hipvpitsme",
        large_image: "smile",
        large_text: "Made by hipvpitsme",
        buttons: {
            button1: {
                enabled: "false",
                label: "Made by hipvpitsme",
                url: "https://www.github.com/hipvpitsme"
            },
            button2: {
                enabled: "false",
                label: "Made by hipvpitsme1",
                url: "https://www.github.com/hipvpitsme"
            }
        }
     }
     jsonFile.writeFileSync('config.json', obj)
}
function writeConfig() {
    if(fs.existsSync('config.json')) {
        writeBare()
    } else {
        fs.createWriteStream('config.json')
        writeBare()
    }
}
function configValid() {
    var data
    try {
        data = jsonFile.readFileSync('config.json')
    } catch(err) {
        data = null
    }
    if(!data || !data.buttons || data.buttons === null || !data.buttons.button1 || data.buttons.button1 === null || !data.buttons.button2 || data.buttons.button2 === null || !data.details || data.details === "" || !data.large_image || data.large_image === "" || !data.large_text || data.large_text === "" || !data.clientid || !data.buttons_enabled || data.buttons_enabled === "") {
        writeConfig()
    }   
}
function writeConfigVals(clientid, details, large_image, large_text, buttons_enabled, button1_enabled, button1_label, button1_url, button2_enabled, button2_label, button2_url) {
    let data = jsonFile.readFileSync('config.json')
    const obj = { 
        clientid: clientid || data.clientid,
        buttons_enabled: buttons_enabled || data.buttons_enabled,
        details: details || data.details,
        large_image: large_image || data.large_image,
        large_text: large_text || data.large_text,
        buttons: {
            button1: {
                enabled: button1_enabled || data.buttons.button1.enabled,
                label: button1_label || data.buttons.button1.label,
                url: button1_url || data.buttons.button1.url
            },
            button2: {
                enabled: button2_enabled || data.buttons.button2.enabled,
                label: button2_label || data.buttons.button2.label,
                url: button2_url || data.buttons.button2.url
            }
        }
     }
     jsonFile.writeFileSync('config.json', obj)
}
configExist()
configValid()
var initialData = jsonFile.readFileSync('config.json')
buttonsEnabled.value = initialData.buttons_enabled
clientid.value = initialData.clientid
details.value = initialData.details
largeImage.value = initialData.large_image
largeText.value = initialData.large_text
button1Enabled.value = initialData.buttons.button1.enabled
button1Label.value = initialData.buttons.button1.label
button1Url.value = initialData.buttons.button1.url
button2Enabled.value = initialData.buttons.button2.enabled
button2Label.value = initialData.buttons.button2.label
button2Url.value = initialData.buttons.button2.url
var started = false
client.on('ready', () => {
    setInterval(function() {setStatus()}, 1000)
    function setStatus() {
        configExist()
        configValid()
        let data = jsonFile.readFileSync('config.json')
        writeConfigVals(clientid.value, details.value, largeImage.value, largeText.value, buttonsEnabled.value, button1Enabled.value, button1Label.value, button1Url.value, button2Enabled.value, button2Label.value, button2Url.value)
        if(data.buttons_enabled.toLowerCase() === 'true') {
            let statusElement = document.getElementById('status')
            statusElement.innerHTML = '<h1 class="text">RPC Status: On</h1>'
            if(data.buttons.button1.enabled.toLowerCase() === 'true' && data.buttons.button2.enabled.toLowerCase() === 'true') {
                client.request('SET_ACTIVITY', {
                    pid: process.pid,
                    activity : {
                        details : data.details,
                        assets : {
                            large_image : data.large_image,
                            large_text : data.large_text
                        },
                        buttons : [
                            {label : data.buttons.button1.label , url : data.buttons.button1.url},
                            {label : data.buttons.button2.label , url : data.buttons.button2.url}
                        ]
                    }
                })
            } else if(data.buttons.button1.enabled.toLowerCase() === 'true') {
                let statusElement = document.getElementById('status')
                statusElement.innerHTML = '<h1 class="text">RPC Status: On</h1>'
                client.request('SET_ACTIVITY', {
                    pid: process.pid,
                    activity : {
                        details : data.details,
                        assets : {
                            large_image : data.large_image,
                            large_text : data.large_text
                        },
                        buttons : [
                            {label : data.buttons.button1.label , url : data.buttons.button1.url},
                        ]
                    }
                })
            } else if(data.buttons.button2.enabled.toLowerCase() === 'true') {
                let statusElement = document.getElementById('status')
                statusElement.innerHTML = '<h1 class="text">RPC Status: On</h1>'
                client.request('SET_ACTIVITY', {
                    pid: process.pid,
                    activity : {
                        details : data.details,
                        assets : {
                            large_image : data.large_image,
                            large_text : data.large_text
                        },
                        buttons : [
                            {label : data.buttons.button2.label , url : data.buttons.button2.url}
                        ]
                    }
                })
            }
        } else if(data.buttons_enabled.toLowerCase() === 'false') {
            let statusElement = document.getElementById('status')
            statusElement.innerHTML = '<h1 class="text">RPC Status: On</h1>'
            client.request('SET_ACTIVITY', {
                pid: process.pid,
                activity : {
                    details : data.details,
                    assets : {
                        large_image : data.large_image,
                        large_text : data.large_text
                    },
                }
            })
        } else {
            let statusElement = document.getElementById('status')
            statusElement.innerHTML = '<h1 class="text">RPC Status: Error, Please Make Sure The Values That Can Only Be true or false Are Indeed Either true Or false</h1>'
        }
    }
})
if(!started) {
    try {
        started = true
        var currentFile = jsonFile.readFileSync('config.json')
        var currentClientId = currentFile.clientid
        let statusElement = document.getElementById('status')
        statusElement.innerHTML = '<h1 class="text">RPC Status: On</h1>'
        client.login({ clientId : currentClientId }).catch(err=>{
          // console.log(err)
            statusElement.innerHTML = '<h1 class="text">RPC Status: Error, please make sure your client id is correct and then restart the rpc</h1>'
        })
    } catch(err) {
      // console.log(err)
        started = true
        let statusElement = document.getElementById('status')
        statusElement.innerHTML = '<h1 class="text">RPC Status: Error, Please Check If The Client ID is valid</h1>'
    }
}