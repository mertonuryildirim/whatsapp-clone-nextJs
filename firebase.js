import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCUBYSnXOK8Zhs9s52V-oAAvKy36-thGko",
  authDomain: "whatsapp-clone-2177d.firebaseapp.com",
  projectId: "whatsapp-clone-2177d",
  storageBucket: "whatsapp-clone-2177d.appspot.com",
  messagingSenderId: "758008900114",
  appId: "1:758008900114:web:f770deca100c69da48c6cb",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
