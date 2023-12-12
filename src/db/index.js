// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyD_b5RFdj8jUjEo_7jQc8F1qFS9Ur_2vCc",
  authDomain: "hydrogrow-d1a05.firebaseapp.com",
  projectId: "hydrogrow-d1a05",
  storageBucket: "hydrogrow-d1a05.appspot.com",
  messagingSenderId: "904257741320",
  appId: "1:904257741320:web:67df72a5f8e8e4e62c27bd",
  measurementId: "G-GLT5MW6R1P",
  //   apiKey: process.env.API_KEY,
  //   authDomain: process.env.AUTH_DOMAIN,
  //   projectId: process.env.PROJECT_ID,
  //   storageBucket: process.env.STORAGE_BUCKET,
  //   messagingSenderId: process.env.MESSAGING_SENDER_ID,
  //   appId: process.env.APP_ID,
  //   measurementId: process.env.MEASUREMENT_ID,
};

console.log(firebaseConfig.apiKey, "hi");

const connect = initializeApp(firebaseConfig);
// const analytics = getAnalytics(connect);

const db = getFirestore();
const colRef = collection(db, "profile");

getDocs(colRef).then((snapshot) => {
  console.log(snapshot.docs);
});

export { connect };
