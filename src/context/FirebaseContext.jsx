import { createContext } from "react";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

export const FirebaseContext = createContext();

export function FirebaseProvider({ children }) {
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID 
    }
      
    const app = initializeApp(firebaseConfig); 
    const auth = getAuth(app);
    const db = getFirestore(app);

  return (
    <FirebaseContext.Provider value={{ app,auth,db }}>
      {children}
    </FirebaseContext.Provider>
  );
}
