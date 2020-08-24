import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB0krNqYiwcLABoUktKhB_EfyKQDsFG2Rs",
    authDomain: "clone-e0818.firebaseapp.com",
    databaseURL: "https://clone-e0818.firebaseio.com",
    projectId: "clone-e0818",
    storageBucket: "clone-e0818.appspot.com",
    messagingSenderId: "739181510730",
    appId: "1:739181510730:web:83e16b4aa5181278c1e6b3",
    measurementId: "G-EFWQF4RCV1"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };