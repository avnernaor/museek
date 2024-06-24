import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTGNWYWjnwyrBfuAfLMrU6Vkz-VurTyrY",
  authDomain: "museek-huji.firebaseapp.com",
  projectId: "museek-huji",
  storageBucket: "museek-huji.appspot.com",
  messagingSenderId: "367025322381",
  appId: "1:367025322381:web:6c4dff1c758a4f3947a5c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// export
export { auth, db, storage };
