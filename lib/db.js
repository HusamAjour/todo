import firebase from "./firebase";
// import {
//   getFirestore,
//   collection,
//   doc,
//   setDoc,
//   where,
//   getDocs,
// } from "@firebase/firestore";

import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  where,
  getDocs,
  QueryDocumentSnapshot,
  DocumentData,
  query,
  limit,
} from "@firebase/firestore";

export const createUser = (uid, data) => {
  const db = getFirestore();
  const users = collection(db, "users");
  const newDoc = doc(users, uid);
  const setNewUser = setDoc(newDoc, data);
  return setNewUser;
};

export const createTodoItem = async (data) => {
  console.log(data);
  const db = getFirestore();
  const items = collection(db, "todoItems");
  // const newDoc = doc(items);
  const setNewUser = await addDoc(items, data);
  console.log(setNewUser);
  return setNewUser;
};

export const getUserTodoItems = async (authorId) => {
  const db = getFirestore();
  const items = collection(db, "todoItems");
  const condition = query(items, where("authorId", "==", authorId));
  const snapshot = await getDocs(condition);

  const todoItems = [];
  snapshot.forEach((item) => {
    todoItems.push({ id: item.id, ...item.data() });
  });

  return todoItems;
};
