
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

 const firebaseConfig = {
  apiKey: "AIzaSyD2f0Sd9DU9DO306S_3HqGFETnRawVG80w",
  authDomain: "signup-singin-e9f81.firebaseapp.com",
  projectId: "signup-singin-e9f81",
  storageBucket: "signup-singin-e9f81.appspot.com",
  messagingSenderId: "481936469164",
  appId: "1:481936469164:web:5617c1b5e4fdf375f28309",
  measurementId: "G-ZMPGHNM3DL"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export { app, auth};

