import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoeyYwdxERbk_OXn6c9irNCEd5dHSIBu0",
  authDomain: "disenoweb2-f7984.firebaseapp.com",
  projectId: "disenoweb2-f7984",
  storageBucket: "disenoweb2-f7984.appspot.com",
  messagingSenderId: "25959086249",
  appId: "1:25959086249:web:0053439b305344e4f391b8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);