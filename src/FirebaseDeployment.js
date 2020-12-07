import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNYopQJfEQ3oqQqs0ant-5T0Y9Tib50gI",
  authDomain: "grocon-store.firebaseapp.com",
  projectId: "grocon-store",
  storageBucket: "grocon-store.appspot.com",
  messagingSenderId: "271703906642",
  appId: "1:271703906642:web:97de7b44ac11e255a0028b",
  measurementId: "G-PCT9TDT0SD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();
const auth = firebase.auth();

export { database, auth };