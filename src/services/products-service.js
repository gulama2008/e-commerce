import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  increment,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firestore";

export const getAllProducts = async () => {
  // create collection reference
  const collectionRef = collection(db, "products");
  // get all documents based on that reference
    const querySnapshot = await getDocs(collectionRef);
  // tidy data
    console.log(querySnapshot);
    const cleanedData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log(cleanedData);
    return cleanedData;
};