import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwrQnSLryoBuUwMJS4r83EJW_P_vG0USs",
  authDomain: "grocon-67111.firebaseapp.com",
  projectId: "grocon-67111",
  storageBucket: "grocon-67111.appspot.com",
  messagingSenderId: "149464827397",
  appId: "1:149464827397:web:725940a54988e9b827fe6c",
  measurementId: "G-GF7KBM48FP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();
const auth = firebase.auth();

export { database, auth };