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
    const q = query(collection(db, "products"), where("type", "==", category));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot.docs);
    const cleanedData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log(cleanedData);
    return cleanedData;
}

export const getProductById = async (id) => {
  // get document reference
  const docRef = doc(db, "products", id);
  // looking up the document based on reference
  const querySnapshot = await getDoc(docRef);
  // check if doc exists based on id passed in
  if (!querySnapshot.exists()) {
    // throw error if it doesn't exist
    throw new Error("Document not found");
  }
  // or return all the data we need
  return { id: querySnapshot.id, ...querySnapshot.data() };
};

export const changeFavouriteStatusById = async (id,newValue) => {
  try {
    const docRef = doc(db, "products", id);
    await updateDoc(docRef, {
      isFavourited: newValue,
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getProductsByIsFavourited = async () => {
  const q = query(collection(db, "products"), where("isFavourited", "==", true));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.docs);
  const cleanedData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(cleanedData);
  return cleanedData;
};

export const subscribeToProducts = (callback) => {
  const collectionRef = collection(db, "products");
  const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
    const productsData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(productsData);
  });

  return unsubscribe;
};

export const updateStock = async (id, quantity) => {
  try {
    const docRef = doc(db, "products", id);
    await updateDoc(docRef, {
      quantity: quantity,
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const addProductInCart = async (data) => {
  try {
    // const newProduct = { ...data };
    const collectionRef = collection(db, "cart", data);
    const newProductRef = await addDoc(collectionRef, data);
    // return the created Movie
    return { id: newProductRef, ...data };
  } catch (e) {
    // if i need to I can log etc here
    console.log(e);
    throw e;
  }
};

export const updateProductInCart = async (id, quantity) => {
  try {
    const docRef = doc(db, "cart", id);
    await updateDoc(docRef, {
      quantity: quantity,
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};