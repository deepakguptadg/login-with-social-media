
// npm install firebase@8.3.1 --save
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAaoPHHZnkYOQBr4phdIG1fbfRt2XvQq10",
    authDomain: "login-with-socail-media.firebaseapp.com",
    projectId: "login-with-socail-media",
    storageBucket: "login-with-socail-media.appspot.com",
    messagingSenderId: "950249182305",
    appId: "1:950249182305:web:f66b22f381341cf0320620",
    measurementId: "G-HDLXKBBRSZ"
};
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export { auth, firebase };