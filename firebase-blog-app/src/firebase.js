import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyALryJDGfAOJ8bJTuqDkmc1gOFCF87DIy8",
    authDomain: "react-blogs-app-3ba93.firebaseapp.com",
    projectId: "react-blogs-app-3ba93",
    storageBucket: "react-blogs-app-3ba93.appspot.com",
    messagingSenderId: "881062622290",
    appId: "1:881062622290:web:3cf6e85426a1f8fd33db8b"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth,db,storage};
  