import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyBYK3nDnzqs7zRr695Mrmjd7E1A22Pa9s4",
  authDomain: "fym-web-29dfe.firebaseapp.com",
  projectId: "fym-web-29dfe",
  storageBucket: "fym-web-29dfe.firebasestorage.app",
  messagingSenderId: "302637425168",
  appId: "1:302637425168:web:d7d04466567db6d7b4e095"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);