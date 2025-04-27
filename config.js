// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js'





import { getAuth,
   
  createUserWithEmailAndPassword ,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification 
  ,GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updatePassword,
 } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js'

//FIREBASE-STORE//

import { getFirestore,

  doc, setDoc,
  getDoc ,
  updateDoc,
  collection,
  addDoc,
getDocs, deleteDoc
,
onSnapshot



 } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoFzgJdKg0I_-qZYOCFz-14rkqJRms1s8",
  authDomain: "mini-hackathon-6de39.firebaseapp.com",
  projectId: "mini-hackathon-6de39",
  storageBucket: "mini-hackathon-6de39.firebasestorage.app",
  messagingSenderId: "434255216830",
  appId: "1:434255216830:web:1b388bad876456f41b9eef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);




export{
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    sendEmailVerification ,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    updatePassword,
  
  // firstore
    getFirestore,
    db,
    doc, setDoc,
    getDoc ,
    updateDoc,
    collection,
    addDoc, getDocs, deleteDoc,
    onSnapshot
    
  }


