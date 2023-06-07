import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore' 

const firebaseConfig = {
  apiKey: "AIzaSyCy7DS5sPa0SMqWw_FHVlRzH1X7IDFbbpM",
  authDomain: "real-estate-marketplace-7591e.firebaseapp.com",
  projectId: "real-estate-marketplace-7591e",
  storageBucket: "real-estate-marketplace-7591e.appspot.com",
  messagingSenderId: "485348999462",
  appId: "1:485348999462:web:8be8776ee7bf5cc38541e7"
};
 
initializeApp(firebaseConfig);
export const db = getFirestore()