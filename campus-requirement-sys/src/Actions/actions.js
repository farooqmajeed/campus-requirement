import firebase from "firebase"
import database from "../Server/index"
import { browserHistory } from "react-router"
import { store } from "../Store/store"
export function signUp(userDetail, password) {
    return (dispatch) => {
        return firebase.auth().createUserWithEmailAndPassword(userDetail.email, password).then(function (result) {
            console.log("SuccessfuLly")
            return insertUserDetail(userDetail, result.uid)
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
    }
}

function insertUserDetail(userDetail, uid) {
    console.log(uid)
    var nes = {}
    var groups = Object.assign({ donate: userDetail.donor, request: false, username: userDetail.fullName , blood: userDetail.bloodGroup, mobile: userDetail.mobileNumber}, nes)
    console.log(userDetail)
    database.ref().child("users/" + uid).set(userDetail).then((result) => {
        database.ref().child("groups/" + userDetail.bloodGroup + "/users/" + uid).set(groups)
    })
}

export function Login(email, password) {
    return (dispatch) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                return dispatch({
                    type: "LoginSuccess",
                    user
                })
                
            })

            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
            });
    }
}

export function signOut() {
    return (dispatch) => {
        return firebase.auth().signOut().then(function (user) {
            browserHistory.push("/")
            return dispatch({
                type: "logout"
            })
            
        }, function (error) {
            console.log(error)

        });
    }
}


    // export function fetchBloodGroup(uid) {
    //     return (dispatch) => {
    //         return database.ref().child("users/" + uid).once("value").then((result) => {
    //             var blood = result.val().bloodGroup
    //             console.log(blood)
    //             fetchUsers(blood)
    //         })
            
    //     }
    // }

    // export function fetchUsers(blood) {
    //     switch(blood)
    //     {
    //         case "O":
    //         bloodOusers()
    //         break;
    //         case "A":
    //         bloodOusers()
    //         bloodAusers()
    //         break;
    //         case "B":
    //         bloodOusers()
    //         bloodBusers()
    //         break;
    //         case "AB":
    //         bloodOusers()
    //         bloodAusers()
    //         bloodABusers()
    //         break;
    //         default:
    //         console.log("Sorry Wrong Data")
    //     }

    // }
    // function bloodAusers()
    // {
    //     return database.ref().child("groups/A/users").once("value").then((result) => {
    //         var data = result.val()
            
    //         return (store.dispatch({
    //             type: "Donor",
    //             data
    //         }))
    //     })
    // }
    // function bloodBusers()
    // {
    //     return database.ref().child("groups/B/users").once("value").then((result) => {
    //         var data = result.val()
            
    //         return (store.dispatch({
    //             type: "Donor",
    //             data
    //         }))
    //     })
    // }

    // function bloodOusers()
    // {
    //     return database.ref().child("groups/O/users").once("value").then((result) => {
    //         var data = result.val()
    //         console.log(result.val())
    //         return (store.dispatch({
    //             type: "Donor",
    //             data
    //         }))
    //     })
    // }
    // function bloodABusers()
    // {
    //     return database.ref().child("groups/AB/users").once("value").then((result) => {
    //         var data = result.val()
    //         return (store.dispatch({
    //             type: "Donor",
    //             data
    //         }))
    //     })
    // }

        export function changing(uid,data)
        {
            return console.log(uid,data)
        }
