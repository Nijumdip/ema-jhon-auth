import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBe8WTctpIKoby-9QjxiIHax5f9_aHg_oo",
  authDomain: "ema-john-simple-63acb.firebaseapp.com",
  projectId: "ema-john-simple-63acb",
  storageBucket: "ema-john-simple-63acb.appspot.com",
  messagingSenderId: "178283054652",
  appId: "1:178283054652:web:f01dcb9f8e200fa937a539"
};

const initializeConfig = initializeApp(firebaseConfig);
const auth = getAuth(initializeConfig);


export default auth;


