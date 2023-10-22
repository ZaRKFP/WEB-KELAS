// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-L8O5KEFelqSiSgaNOeERnd3jk-DYqZc",
  authDomain: "web-kelas-e84cf.firebaseapp.com",
  projectId: "web-kelas-e84cf",
  storageBucket: "web-kelas-e84cf.appspot.com",
  messagingSenderId: "139253738487",
  appId: "1:139253738487:web:b564628a7a9a8c0f69dcf2",
  measurementId: "G-YZ1TVTRWPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();