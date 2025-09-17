import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";
export const addTask = async (task) => {
  try {
    await addDoc(collection(db, "tasks"), { name: task });
  } catch (e) {
    console.error("Error adding task: ", e);
  }
};

export const getTasks = async () => {
  try {
    const snapshot = await getDocs(collection(db, "tasks"));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error("Error getting tasks: ", e);
    return [];
  }
};

export const deleteTask = async (id) => {
  try {
    await deleteDoc(doc(db, "tasks", id));
  } catch (e) {
    console.error("Error deleting task: ", e);
  }
};
