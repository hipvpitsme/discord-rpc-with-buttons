# discord-rpc-with-buttons
A discord RPC application that uses the new button feature of Discord's RPC API.

## 📌 Usage 📌

[Youtube Tutorial](https://youtu.be/1T1jJdHvuBo)

1) Download the latest release from [here](https://github.com/hipvpitsme/discord-rpc-with-buttons/releases)

2) Unzip the zip and double click `discord-rpc-hipvpitsme-X.X.X Setup.exe`

3) An icon will appear on your desktop, double click to run it. This will open the applications GUI. Check the configuration guide for help with configuring. 

## ⚙️ Configuration guide ⚙️

The code updates your status every 5 seconds, it will also write the current files to the config file to save your data when the application is started next, so if your status is taking longer to update, please refer to the troubleshooting guide.

When you start the application, it will load default values from the config file. Push clear all to clear the values.

### Placeholders

* Client ID
  * The client ID of your Discord RPC application. If you change this you must restart the application.
* Details
  * The string that shows under the application name in your RPC. This can be a max of 128 characters.
* Large Image ID
  * The large image that will appear in your RPC. This should be the key for an asset in your application. 
* Large Text
  * The text that appears when you hover over the large image. This can be 128 characters max.
* Buttons Enabled
  * Either true or false, determines if buttons show in your RPC.
* Button 1 and 2 Toggle
  * Either true or false, determines if that button will show in your RPC. Buttons Enabled must be true for these buttons to show. 
* Button 1 and 2 Label
  * The labels for either button
* Button 1 and 2 URL
  * The URL that the user should be redirected to when they click the button, this must start with `https://`.
## ⭐ Extras ⭐

### Buttons
Kill App - This will force close the application.
Clear All - This will clear all values but not config values.


### RPC Elements
![RPC Elements](https://hipvpitsme.github.io/discord-rpc-with-buttons/images/rpc%20example.png)
The black circled text is the Large Text

The red circled image is the Large Image

The grey circled text is the Details

The white circled button is Button 1

The blue circled button is Button 2

## ❗ Common issues ❗
If these don't help, join my [Discord](https://discord.gg/sjQXh8jRtK) for more help.

* "Windows protected your PC"

  * To fix this, press "More Info" then "Run Anyway"

![RPC Windows Defender](https://hipvpitsme.github.io/discord-rpc-with-buttons/images/protected%20pc.png)

* "On launch, the RPC doesn't start"

  * The RPC may not start immediately, please give it 2-5min to start. If it doesn't try changing some values. If it still doesn't work then join the [Discord](https://discord.gg/sjQXh8jRtK) for help.
 
* "RPC not displaying"

  * Make sure you tried the "On launch, the RPC doesn't start" fix first. If that doesn't help then go to User Settings > Game Activity and make sure "Display currently running game as a status message" is toggled on or green.

## 🔧 Developement 🔧

You will need [Git](https://git-scm.com/) and [NodeJS](https://nodejs.org/en/) 

```
# clone the repo
$ git clone https://github.com/hipvpitsme/discord-rpc-with-buttons.git

# cd into the directory
$ cd discord-rpc-with-buttons

# install the packages
$ npm install

# start the application
$ npm start
```

## ⚠️ License ⚠️

 The license that I use allows anyone to use my code, change it in any way, and distribute it as long as my name is still on that code, so please do as you wish with it but do not claim it as your own :)
