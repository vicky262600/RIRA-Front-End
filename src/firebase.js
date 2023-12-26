// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage} from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvpbI6OjXLjYdmoH1nWYJyDPf9HAgRgPY",
  authDomain: "rira-social-media.firebaseapp.com",
  projectId: "rira-social-media",
  storageBucket: "rira-social-media.appspot.com",
  messagingSenderId: "33921742968",
  appId: "1:33921742968:web:c0f3c3bf16ad0983b9158d",
  measurementId: "G-RDQ0WVSMWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);