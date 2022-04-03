import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3jZnViKWgid3c5a6EVuZIuGiVG7Tia6M",
    authDomain: "todo-react-firebase-85163.firebaseapp.com",
    projectId: "todo-react-firebase-85163",
    storageBucket: "todo-react-firebase-85163.appspot.com",
    messagingSenderId: "260554178475",
    appId: "1:260554178475:web:88c15e2d0f2a3f8b159cee",
    measurementId: "G-P30D7QX5MS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  export {db};