// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration




const firebaseConfig = {
apiKey:import.meta.env.VITE_apiKey,
authDomain:import.meta.env.VITE_authDomain,
projectId:import.meta.env.VITE_projectId,
storageBucket:import.meta.env.VITE_storageBucket,
messagingSenderId:import.meta.env.VITE_messagingSenderId,
appId:import.meta.env.VITE_appId,
};
/* const firebaseConfig = {
  apiKey: "AIzaSyD1f1ex9bbvaX1luhwL49hc-dHL7sMcR78",
  authDomain: "smile-pure-836d4.firebaseapp.com",
  projectId: "smile-pure-836d4",
  storageBucket: "smile-pure-836d4.appspot.com",
  messagingSenderId: "135191868049",
  appId: "1:135191868049:web:b14d1b961a248e4a714530"
};
 */
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;