// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0c_cT85ZmuwAeQdCxpyIhHACeVZXanzE",
  authDomain: "crew-migration-dashboard.firebaseapp.com",
  projectId: "crew-migration-dashboard",
  storageBucket: "crew-migration-dashboard.firebasestorage.app",
  messagingSenderId: "827000034062",
  appId: "1:827000034062:web:c87acbefce5b2c40447d5f",
  measurementId: "G-VBMEBKHJKC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { analytics, app, storage };
