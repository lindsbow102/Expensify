import * as firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAaCPQo4aIhK6IpkFxJBE-vc1pSmAF2dN4",
  authDomain: "expensify-20f45.firebaseapp.com",
  databaseURL: "https://expensify-20f45.firebaseio.com",
  projectId: "expensify-20f45",
  storageBucket: "expensify-20f45.appspot.com",
  messagingSenderId: "686216910743"
};

firebase.initializeApp(config);

const database = firebase.database();

// Reference to the root of our database
database.ref().set({
    name: 'Lindsey Bowen',
    age: 38,
    hobbies: ['running', 'coding', 'traveling', 'lifting'],
    location: {
        city: 'Gilbert',
        state: 'Arizona',
        country: 'USA'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((error) => {
    console.log('This failed.', error);
})

//database.ref().set('This is my data');

// database.ref('age').set(39);
// database.ref('location/state').set('Wyoming');

database.ref('attributes').set({
    height: '66 inches',
    weight: '117 pounds'
}).then(() => {
    console.log('Attributes have now been added!');
}).catch((e) => {
    console.log('Oops! This failed.', e);
});

