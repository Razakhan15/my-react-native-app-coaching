import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVTxjixv6fXDON1kzN8NSitdaqMXKhw1Y",
  authDomain: "react-native-app-a672c.firebaseapp.com",
  projectId: "react-native-app-a672c",
  storageBucket: "react-native-app-a672c.appspot.com",
  messagingSenderId: "272467216599",
  appId: "1:272467216599:web:fe7dcb2f8b05318055c892",
  measurementId: "G-VSC6LX8GEE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };
