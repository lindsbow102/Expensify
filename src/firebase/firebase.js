import * as firebase from "firebase";

// For firebase syntax learned during this course, please reference src/playground/firebase

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

export { firebase, database as default };