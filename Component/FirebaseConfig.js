import * as firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBj9uW7Bzercl8Lv51GhTR8q4OX2PdeXe0",
    authDomain: "myphuot-f54a4.firebaseapp.com",
    databaseURL: "https://myphuot-f54a4.firebaseio.com",
    projectId: "myphuot-f54a4",
    storageBucket: "myphuot-f54a4.appspot.com",
    messagingSenderId: "147100050425"
};
export const  firebaseApp=firebase.initializeApp(config);
