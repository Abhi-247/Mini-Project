import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKT1x9GezBW-VR_o05IxYCSqkm5MfBq64",
  authDomain: "alumni-portal-c595d.firebaseapp.com",
  projectId: "alumni-portal-c595d",
  storageBucket: "alumni-portal-c595d.firebasestorage.app",
  messagingSenderId: "190948526901",
  appId: "1:190948526901:web:090f1554b10810c50fda7c",
  measurementId: "G-KCK07Y0675",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
