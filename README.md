# discord-rpc-with-buttons
A discord rpc application that uses the new button feature of discord's rpc api.

# License 
## The license that i use allows anyone to use my code, change it in any way, and distribute it as long as my name is still on that code, so please do as you wish with it but do not claim it as your own :)

# How to use

### Step 1: Download the latest release
### Step 2: Double click on the installer and let it install, when it is done, an app icon will apear on your desktop.
### Step 3: Start the application and the default rpc will be started, check the configuration guide to see how to configure the rpc.

## Common installation issues

### "Windows protected your pc"
![RPC Windows Defender](https://hipvpitsme.github.io/discord-rpc-with-buttons/images/protected%20pc.png)
### To fix this, just push "More Info" and "Run Anyway"
![RPC Windows Defender Run Anyway](https://hipvpitsme.github.io/discord-rpc-with-buttons/images/protected%20pc%20run%20anyway.png)

## For Additional Help, Join My [Discord](https://discord.gg/sjQXh8jRtK)

# Configuration guide
### When you start the app, it will load the default values from its config file that it creates on first start up or if it doesnt detect one (You wont have to worry about the config file, this process is automatic)
### If you clear any of the values, the value in the config file will stay the same. So, push the "Clear All" button and lets g et started

## Placeholders 
### The Placeholders in each of the text boxes indicated what value to put into them. This is a list of all of the values and what is right or wrong to put in them.
* Client ID
  * This is the Client ID of your discord rich presence application **If you change the client id, you must restart the application for it to authorize with the different client id** [obtained here](https://discord.com/developers/applications) (If you dont know what this is, please learn    the basics of how discord's rpc works, or watch my youtube tutorial)
* Details
  * This is what will display under the application name on your rich presence, this can be any text, for example "Stay Cool" keep this rather short, if your rich presence isnt updating, that probably means that this is too long
* Large Image ID
  * This is the image that will display for your rich presence, the ID is the image name that you uploaded under the rich presence art assets of your application.
* Large Text
  * This is the text that will show up when you hover over the large image, this can be any value, for example "hipvpitsme is so cool" but you must keep this remotely short just like the details value
* Buttons Enabled
  * This can only have a true or false value and nothing else, an error will display if you put anything else other than true or false. This indicates if the buttons on your rich presence will show up or not.
* Button 1 Toggle
  * This can only be true or false, this indicated weather the first button will be on or not. This button will only display if Buttons Enabled is true and if Button 1 Toggle is true
* Button 2 Toggle
  * This can only be true or false, this indicated weather the first button will be on or not. This button will only display if Buttons Enabled is true and if Button 2 Toggle is true
* Button 1 Label
  * The text that is on button 1, keep this relatively short too. 
* Button 1 Url
  * The url that button 1 will show when someone (other than the currently logged in user) clicks on button 1, **MUST BEGIN WITH https://, if it doesnt begin with that, your rich presence will not work!** example: https://www.github.com
* Button 2 Label
  * The text that is on button 2, keep this relatively short too. 
* Button 2 Url
  * The url that button 2 will show when someone (other than the currently logged in user) clicks on button 2, **MUST BEGIN WITH https://, if it doesnt begin with that, your rich presence will not work!** example: https://www.github.com
  
## Buttons
### The "Kill App" button will force close the app.
## The "Clear All" button will clear all of the current values but will not erase the config.

## Rpc status
### If the rpc starts successfully, the rpc status will be on, else, there will be an error telling you what you did wrong.

## Elements of the RPC
![rpc elements](https://hipvpitsme.github.io/discord-rpc-with-buttons/images/rpc%20example.png)
### The text circled in black is the "Large Text"
### The image circled in red is the "Large Image"
### The text circled in gray is the "Details"
### The button circled in white is "Button 1"
### The button circled in blue is "button 2"

## Uninstalling
### Go to your control panel and look for "Uninstall a program" then search for discord-rpc and an app with the publisher of hipvpitsme will pop up, right click it, click uninstall, then wait for the uninstallation to be completed. When it it completed, the app will disappear from the list in control panel.

## Common bugs
* When the app launches, the rpc doesnt start
 * Let the app rest for 5 - 10 minutes closed, then start it again and try changing some of the values, if it still doesnt work join the discord or uninstall and reinstall the app.


## Developement
### Download package.json and src into an empty folder on your desktop, open it with your code editor, run npm install, wait for that to finish, then run "npm run start" to start the application to run the app and run "npm run make" to build the app into a .exe, the exe will be outputted into the out/make/name of the exe.exe
