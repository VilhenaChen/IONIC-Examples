# Third Example - Background Tasks
Is this example we can see the usage of background tasks.
When the button "start" is pressed the app tries to read a file with two numbers, if the files does not exist it will make to random numbers between 10000 and 99999.
Every 10s the first number will increase and the last number will decreased.
This will go on until the user presses the "stop" button
![Alt Text](https://media.giphy.com/media/hnIsfdpoTSGx0LDWTx/giphy.gif)

## How to compile & run
### On the Web

 1. Open a terminal window on the project folder
 2. Run the "npm install" command to install all necessary dependencies
 3. Run "ionic serve" to build and run, on the browser, the application
 
### On Mobile Devices
 First thing we need to do is to install capacitor, this is a native runtime that will generate a web native Android/IOS app from our web code.
 To install it we need to:
 1. Run "npm install @capacitor/cli @capacitor/core"
 
#### For Android

 1. Run "ionic cap sync", this will sync all dependencies with capacitor
 2. Run "ionic cap open android", this will open Android Studio IDE with the project
 3. Run the project on the Android Studio IDE
