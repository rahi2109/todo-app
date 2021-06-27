

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBIxffSdABbdKhR20iMAV2PH6h5Zm5Wjo0",
  authDomain: "todo-app-972db.firebaseapp.com",
  databaseURL: "https://todo-app-972db-default-rtdb.firebaseio.com",
  projectId: "todo-app-972db",
  storageBucket: "todo-app-972db.appspot.com",
  messagingSenderId: "504861758345",
  appId: "1:504861758345:web:b6b39f8d25eca99d78c758",
  measurementId: "G-M0RRHNYNY4"
  
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();

  export default db;