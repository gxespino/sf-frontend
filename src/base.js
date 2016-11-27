import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDnVyIcqOXi1-TO_q_Sq1F5ghQhR4jSX-U",
  authDomain: "smarterflips.firebaseapp.com",
  databaseURL: "https://smarterflips.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
