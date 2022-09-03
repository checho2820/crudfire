import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCSz3GgX3vj-yThVH62UQtHp2kEt8jSDE4",
  authDomain: "crudfire-d20fe.firebaseapp.com",
  projectId: "crudfire-d20fe",
  storageBucket: "crudfire-d20fe.appspot.com",
  messagingSenderId: "870966776479",
  appId: "1:870966776479:web:51be600a1aae826a23c8aa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export {firebase};