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
* State
  * The state of your client.
* Client ID
  * The client ID of your Discord RPC application. If you change this you must restart the application.
* Details
  * The string that shows under the application name in your RPC. This can be a max of 128 characters.
* Large Image
  * The large image that will appear in your RPC. This should be the key for an asset in your application. 
* Large Text
  * The text that appears when you hover over the large image. This can be 128 characters max.
* Small Image
  * The small image that will appear in your RPC. This should be the key for an asset in your application. 
* Small Text
  * The text that appears when you hover over the small image. This can be 128 characters max.
* Button 1 and 2 Toggle
  * Determines if that button will show in your RPC.
* Button 1 and 2 Label
  * The labels for either button
* Button 1 and 2 URL
  * The URL that the user should be redirected to when they click the button, this must start with `https://` or `http://`.
* Start
  * The start epoch time your client will use to determine your strat time.
* End
  * The end time that your client will use to determine how much time is remaining.
## ⭐ Extras ⭐

### Buttons
Set Start To Current Time - This will set the start value to the current epoch time.
Set End To Current Time Plus x Seconds - This will set the end value to the current epoch time plus how many seconds you enter, ex: 86400 seconds is a day so if you set the start time to the current time and the end time to plus that many seconds, your rpc will show you ending your game in 23 hours.

## ❗ Common issues ❗
If these don't help, join my [Discord](https://discord.gg/sjQXh8jRtK) for more help.

### If an error message pops up, read the error and do as it says or restart the app.

* "Windows protected your PC"

  * To fix this, press "More Info" then "Run Anyway"
* Buttons Cant Be Clicked
  * Restart the app
* My buttons stopped working
  * Restart the app
* My config erased itself
  * Yeah i don't know why it does this, it does it whevever your app has an error so just so stuff right lol

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
$ npm run start
```

## ⚠️ License ⚠️

 The license that I use allows anyone to use my code, change it in any way, and distribute it as long as my name is still on that code, so please do as you wish with it but do not claim it as your own :)
