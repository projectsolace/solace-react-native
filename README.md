# Solace

Solace is a mental wellness mobile app that utilizes IBM Watson's Personality/Emotional Insights API to help users observe their own mental and emotional processes over time. Each day, users are encouraged to share their thoughts and feelings with Solace by simply speaking to the app. Solace will then analyze the recordings and output a visual representation of the user's personality and emotional insights. Users will have the ability to track not only their most recent statistics but also be able to check their progress over time.

The deployed Admin Panel/Backend server is located at:

https://solace-admin.herokuapp.com/

To login and see our test data render for different demographics you can login with:

Username: anuj@anuj.anuj  
PW: 123  


The backend github is located at:

https://github.com/jennyrchan/solace-admin 



## Getting Started

Follow these steps to get the app or the backend running on your machine



### Prerequisites

This guide assumes that you have Node (and npm) and PostgreSQL installed for the backend. 

For the client-side you will need XCode installed. 

If you don't, you can get them here: 

https://nodejs.org

https://www.postgresql.org/

https://developer.apple.com/xcode/downloads/



### Installing Backend

```
git clone https://github.com/jennyrchan/solace-admin
```

Make sure PostgreSQL is running and in the project directory run

```
npm install
```

to seed the database

```
npm run seed
```

then, to start the server run

```
npm start
```

and connect to localhost:1337

You can login with:
Username: anuj@anuj.anuj  
PW: 123  



### Installing Client-Side

```
git clone https://github.com/jawang12/solace-react-native
```

The application is linked to the deployed server so you do not need a local server running.

In the project directory run:

```
npm install
```

then to link the react-native libraries

```
react-native link
```

then, to start the application

```
react-native run-ios
```

and the app should automatically load!

You can login to the application with:     
Username: anuj@anuj.anuj . 
PW: 123 . 
   
Or you can create your own account and start recording!



## Running the tests

Our test suite features testing for the routing, database, API and frontend. 

On the backend we test Express, our database models and our Watson API behavior. 

On the frontend, we test our React-Native component and Redux store for expected behavior, and also test specific actions of out libraries and modules. 

All tests are run via

```
npm test
```



## Authors

* **Anuj Shah** - [GitHub](https://github.com/anujshah108)
* **Jenny Chan** - [GitHub](https://github.com/jennyrchan)
* **Winston Wang** - [GitHub](https://github.com/mobiuschang)
* **Jimmy Wang** - [GitHub](https://github.com/jawang12)


