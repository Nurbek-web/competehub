import firebase_app from "../config";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function getCollection(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));

  return querySnapshot;
}
