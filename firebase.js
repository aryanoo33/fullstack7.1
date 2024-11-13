import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyDuIv-iqF5V9fPrhBcYxwrE2xkSYUM3BXs",
  authDomain: "fsd-f21cb.firebaseapp.com",
  projectId: "fsd-f21cb",
  storageBucket: "fsd-f21cb.firebasestorage.app",
  messagingSenderId: "146003539879",
  appId: "1:146003539879:web:c1f8c2280c67cf642a2882",
  measurementId: "G-F4N60JRRPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
