﻿# Second Example - 3 Screens
This example shows how we can switch between pages, and see different types of lists:

 - List with numbers;
 - List with an array of words;
 - List with images, text, and a number.
 
 ![Alt Text](https://media.giphy.com/media/qe46ouCEhdtEq9LrTr/giphy.gif)

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
