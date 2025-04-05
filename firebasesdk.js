// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "<enter ur api key>",
    authDomain: "unified-mentor-a190d.firebaseapp.com",
    databaseURL: "https://unified-mentor-a190d-default-rtdb.firebaseio.com/",
    projectId: "unified-mentor-a190d",
    storageBucket: "unified-mentor-a190d.firebasestorage.app",
    messagingSenderId: "548641897619",
    appId: "1:548641897619:web:69b44d9644bad0a813e166",
    measurementId: "G-152PLCT7BC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
