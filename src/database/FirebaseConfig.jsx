import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyBufwZNscSNIDlRHdEd4k9QfSB5Dd8DPXc",
    authDomain: "developerteam-63846.firebaseapp.com",
    projectId: "developerteam-63846",
    storageBucket: "developerteam-63846.appspot.com",
    messagingSenderId: "948388146230",
    appId: "1:948388146230:web:bdf149294e38db1f86bc97",
    measurementId: "G-0V1ZHTP397"
};

firebase.initializeApp(config);
const db = firebase.firestore()

export default db;