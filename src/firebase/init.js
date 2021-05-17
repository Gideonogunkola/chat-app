import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAjwnOR3P-sZH5g2zwUQc57EkklLglKkB8",
    authDomain: "chat-app-67163.firebaseapp.com",
    projectId: "chat-app-67163",
    storageBucket: "chat-app-67163.appspot.com",
    messagingSenderId: "1023210005269",
    appId: "1:1023210005269:web:98a0a22fdb265af16e3f1c",
    measurementId: "G-1QES6042CF"
  };
  // Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 firebaseApp.firestore().settings({timestampsInSnapshots: true})
  firebase.analytics();

  export default firebaseApp.firestore()