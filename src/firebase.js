import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-b2q01fdn5DDX48GLrvnHIoMlRll5Ips",
  authDomain: "linkedin-c0844.firebaseapp.com",
  projectId: "linkedin-c0844",
  storageBucket: "linkedin-c0844.appspot.com",
  messagingSenderId: "476025352970",
  appId: "1:476025352970:web:99bbb303d7c8b5cef900f3",
  measurementId: "G-NXCNPTWPMK",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
