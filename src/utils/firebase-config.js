
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCwJ01FuF3KMB4xFbHK-B6hHg5bmCqC14U",
  authDomain: "hbo-project-edbfc.firebaseapp.com",
  projectId: "hbo-project-edbfc",
  storageBucket: "hbo-project-edbfc.appspot.com",
  messagingSenderId: "65826670697",
  appId: "1:65826670697:web:edabe96a7a42fbd6a47af8",
  measurementId: "G-SEVRQX6TC5"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);