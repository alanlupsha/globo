# globo
react native example

```
# clean cache with
npm cache clean --force
# install the latest version of npm globally as admin:
npm install -g npm@latest --force
# clean cache with
npm cache clean --force


npm i -g create-react-native-app
npm i -g react-native-cli
react-native init reactNativeCLI

create-react-native-app globo


npm install -g react-devtools

yarn start
```

or

Install Android SDK, create an emulator, start it:
```
c:\androidsdk\emulator\emulator.exe -avd Nexus_5X_API_28_x86
# or from Git Bash:
/c/androidsdk/emulator/emulator.exe -avd Nexus_5X_API_28_x86


npm install
npm start
```
Go to the browser which opens up automatically, ex: http://localhost:19002, and click on "Run on Android device/emulator.

and select "a" to run on the android emulator.


# Some useful Android adb commands:
adb kill-server
adb start-server
adb shell ps
adb shell ps | grep "yourprocess"
adb shell kill processID
adb shell top

# To see your emulator name:
adb devices | grep emulator

# To kill an emulator process:
adb -s emulator-5554 emu kill

# To kill all the running emulators:
adb devices | grep emulator | cut -f1 | while read line; do adb -s $line emu kill; done

# To start your emulator from CMD:
c:\androidsdk\emulator\emulator.exe -avd Nexus_5X_API_28_x86
# or from Git Bash / Visual Studio Code terminal:
/c/androidsdk/emulator/emulator.exe -avd Nexus_5X_API_28_x86
