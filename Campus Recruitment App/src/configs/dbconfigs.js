import firebase from 'firebase';

const config = {
     apiKey: "AIzaSyCFLMGx8LhHYCVQGESej1OTqpMG0r_s29A",
    authDomain: "campus-requirement-sys.firebaseapp.com",
    databaseURL: "https://campus-requirement-sys.firebaseio.com",
    storageBucket: "campus-requirement-sys.appspot.com",
    messagingSenderId: "213787217974"
};

firebase.initializeApp(config);
export const database = firebase.database();

export const storage = firebase.storage();

export const fbAuth = firebase.auth();
 