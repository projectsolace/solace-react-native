# Solace
  
Solace is a mental wellness mobile app that utilizes IBM Watson's Personality/Emotional Insights API to help users observe their own mental and emotional processes over time. Each day, users are encouraged to share their thoughts and feelings with Solace by simply speaking to the app. Solace will then analyze the recordings and output a visual representation of the user's personality and emotional insights. Users will not only have the ability to track their most recent statistics but also be able to check their progress over time.

The deployed Admin Panel and Backend Server is located at: https://solace-admin.herokuapp.com/

To see our test data render for different demographics, you can log in with:
  
Email: anuj@anuj.anuj  
Password: 123  

The client-side GitHub is located at: https://github.com/jawang12/solace-react-native

The Chrome extension GitHub is located at: https://github.com/mobiuschang/solace-chrome

## Getting Started
  
Follow these steps to get the app and backend running on your machine.

### Prerequisites
  
This guide assumes that you have Node (and npm) and PostgreSQL installed for the backend. 
  
For the client-side you will need XCode installed. 
  
If you don't have the prerequisites, you can get them here: 
  
https://nodejs.org
  
https://www.postgresql.org/
  
https://developer.apple.com/xcode/downloads/
  
### Installing Backend
  
```
git clone https://github.com/jennyrchan/solace-admin
```
  
Make sure PostgreSQL is running and in your project directory, run
  
```
npm install
```
  
To seed the database
  
```
npm run seed
```
  
Then to start the server, run
  
```
npm start
```
  
and connect to localhost:1337.
  
You can log in with:  
  
Email: anuj@anuj.anuj  
Password: 123
  
### Installing Client-Side
  
```
git clone https://github.com/jawang12/solace-react-native
```
  
The application is linked to the deployed server so you do not need a local server running.
  
In your project directory, run
  
```
npm install
```
  
Then to link the react-native libraries
  
```
react-native link
```
  
To start the application
  
```
react-native run-ios
```

You can log in to the application with:   

Email: anuj@anuj.anuj  
Password: 123  
     
Or you can create your own account and start recording!

### Installing Chrome Extension
  
```
git clone https://github.com/mobiuschang/solace-chrome
```

In your Chrome browser, go to:
  
```
chrome://extensions/
```
  
Check the box labeled *Developer mode* and click *Load unpacked extension...*

Then select the project directory, and the extension will automatically load!
  
## Running the tests
  
Our test suite features testing for the routing, database, API, and frontend. 
  
On the backend we test Express, our database models, and our Watson API behavior. 

On the frontend, we test our React Native components and Redux store for expected behavior, as well as the specific actions of our libraries and modules.

All tests are run via
  
```
npm test
```
  
## Authors

* **Anuj Shah** - [GitHub](https://github.com/anujshah108)
* **Jenny Chan** - [GitHub](https://github.com/jennyrchan)
* **Winston Wang** - [GitHub](https://github.com/mobiuschang)
* **Jimmy Wang** - [GitHub](https://github.com/jawang12)
