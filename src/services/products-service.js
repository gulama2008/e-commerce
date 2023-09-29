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
    where,
    query
  
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

export const getProductsByCategory = async (category) => {
    const q = query(collection(db, "products"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });
    if (!querySnapshot.exists()) {
        // throw error if it doesn't exist
        throw new Error("Category not found");
    }
    // or return all the data we need
    const cleanedData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log(cleanedData);
    return cleanedData;
}