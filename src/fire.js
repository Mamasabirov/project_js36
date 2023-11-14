import firebase from 'firebase/compat/app'
import 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBTQnSffa5oGnSQRamCGiXArb5wDuj7ib4",
  authDomain: "project-js-4697c.firebaseapp.com",
  projectId: "project-js-4697c",
  storageBucket: "project-js-4697c.appspot.com",
  messagingSenderId: "463244070811",
  appId: "1:463244070811:web:c1c7ab768635562d799b3e",
};


const fire = firebase.initializeApp(firebaseConfig);


export default fire;