import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAs3PrDv8L-eCR4GeNwnx4RtOxSkFCevpQ",
  authDomain: "linkedin-clone-f81b5.firebaseapp.com",
  projectId: "linkedin-clone-f81b5",
  storageBucket: "linkedin-clone-f81b5.appspot.com",
  messagingSenderId: "222812210376",
  appId: "1:222812210376:web:5674f7ef49eb10bdfbd1fd",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
