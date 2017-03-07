import firebase from "firebase"
// import Firedux from "firedux"
var config = {
    apiKey: "AIzaSyABjZheCHX0yTSJ13ZP_eX8ipVtNXOER8Y",
    authDomain: "blood-donate-system.firebaseapp.com",
    databaseURL: "https://blood-donate-system.firebaseio.com",
    storageBucket: "blood-donate-system.appspot.com",
    messagingSenderId: "4965715510"
};
firebase.initializeApp(config);
const database = firebase.database();
// var ref = database.ref()
// export const firedux = new Firedux({
//     ref,
//     // Optional: 
//     omit: ['$localState'] // Properties to reserve for local use and not sync with Firebase. 
// })
export default database