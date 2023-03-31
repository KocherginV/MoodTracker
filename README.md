# MoodTracker
React Native learning project from Frontend Masters [course](https://frontendmasters.com/courses/intermediate-react-native/).

## About app
Application consists of three screens. On the first user can select and submit mood:
| iOS | Android |
|:-------:|:-------:|
| ![iOS](https://user-images.githubusercontent.com/23701921/229122027-256ef2b6-8cc1-43ca-ae3e-5fe930f6df71.png) | ![Android](https://user-images.githubusercontent.com/23701921/229122066-c4d14c3d-6d09-4c53-b686-6e2798bc8aa1.png) |

On the second screen mood history is displayed:
| iOS | Android |
|:-------:|:-------:|
| ![iOS](https://user-images.githubusercontent.com/23701921/229122501-2a05c4b2-6983-43c2-8c0d-940625384b7e.png) | ![Android](https://user-images.githubusercontent.com/23701921/229122528-f5153396-c456-40d9-9046-b96664e0b3cc.png) |


On the third screen user can see analytics:

| iOS | Android |
|:-------:|:-------:|
| ![iOS](https://user-images.githubusercontent.com/23701921/229123692-4cc29c12-95b7-4121-a514-86640e8a6b1e.png) | ![Android](https://user-images.githubusercontent.com/23701921/229123708-7604203b-7039-4b7f-b715-a6504faec41f.png) |

Thanks to `AsyncStorage`, data created is stored in the local storage, so can be transferred between sessions.

## To run project
<h3>Prerequisites:</h3>

 - [XCode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) & [Android Studio](https://developer.android.com/studio) downloaded and running successfully
 - React Native CLI environment setup [guide](https://reactnative.dev/docs/environment-setup) followed thoroughly

<h3>Starting project:</h3>
<h4>iOS: </h4>

**First way:**

 - In terminal navigate to MoodTracker dir 
 - Run: `npx react-native run-ios` 

**Second way:**
 
  - Open project in XCode
  - Select device 
  - Hit run button
 
 <h4>Android:</h4>
 
 **First way:**
 
  - Launch emulator from Android studio, 
  - Navigate to MoodTracker dir 
  - Run: `npx react-native run-android`
 
 **Second way:**
 
  - Open project in Android Studio
  - Select device 
  - Hit run button
 

## Troubleshooting
If you have issues with setting up or running project, please refer to:

 - Course [website](https://kadikraman.github.io/react-native-beyond-basics/)
 - React native env setup [guide](https://reactnative.dev/docs/environment-setup)
