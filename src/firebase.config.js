import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {

  apiKey: "AIzaSyCKlTm9xtH6UPaJ9obf_AsZCKx_f4URdGU",

  authDomain: "e-commerce-fdca5.firebaseapp.com",

  projectId: "e-commerce-fdca5",

  storageBucket: "e-commerce-fdca5.firebasestorage.app",

  messagingSenderId: "509633625994",

  appId: "1:509633625994:web:0d9945f628355221c65273"

};
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore()

