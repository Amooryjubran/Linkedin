import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDqVXwncheL8EmOszDAoFGw42Cm2cRfBok",
  authDomain: "linkedin-f902b.firebaseapp.com",
  projectId: "linkedin-f902b",
  storageBucket: "linkedin-f902b.appspot.com",
  messagingSenderId: "1246779129",
  appId: "1:1246779129:web:562aba6402dcba0954f428",
  measurementId: "G-L1NGZ1JQEL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
