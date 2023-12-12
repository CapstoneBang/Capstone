import express from "express";
import { connect } from "./db/index.js";
import { getFirestore, collection, getDocs } from "firebase/firestore";

//initialise express with json and urlencoded
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = getFirestore();
const colRef = collection(db, "profile");
// Fetch and log data from the collection
getDocs(colRef).then((snapshot) => {
  console.log("Data from 'profile' collection:");
  snapshot.docs.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
