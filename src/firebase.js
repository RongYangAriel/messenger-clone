import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_aScfO512NdP7Jq3ZICZgZH5p7A7thL8",
    authDomain: "capable-sled-279301.firebaseapp.com",
    databaseURL: "https://capable-sled-279301.firebaseio.com",
    projectId: "capable-sled-279301",
    storageBucket: "capable-sled-279301.appspot.com",
    messagingSenderId: "104763397965",
    appId: "1:104763397965:web:072f9a7664fe128d688904",
    measurementId: "G-PTNXCZL9YC"
});

const db = firebaseApp.firestore();

export default db;