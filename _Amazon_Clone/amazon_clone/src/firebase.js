import firebase from "firebase";


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };