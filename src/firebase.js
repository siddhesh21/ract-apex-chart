// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBBCo2c9HqPIyP48TgOrS10f_prC4-5t6c",
  authDomain: "react-chart-app-afb27.firebaseapp.com",
  projectId: "react-chart-app-afb27",
  storageBucket: "react-chart-app-afb27.appspot.com",
  messagingSenderId: "361802687093",
  appId: "1:361802687093:web:844fb721ee300e9fab8e3c",
  measurementId: "G-RT68QRJTDJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, provider, auth };