import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  where,
  deleteDoc,
  getDocs,
  updateDoc,
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

export const deleteTodoItem = async (itemId) => {
  console.log(itemId);
  const db = getFirestore();
  const item = collection(db, "todoItems");
  const newDoc = doc(item, itemId);
  const setNewUser = await deleteDoc(newDoc);
  console.log(setNewUser);
  return setNewUser;
};

export const toggleItemStatus = async (itemId, checked) => {
  console.log(itemId);
  const db = getFirestore();
  const item = collection(db, "todoItems");
  const docToUpdate = doc(item, itemId);
  const docAfterUpdate = await updateDoc(docToUpdate, { checked: !checked });
  console.log(docAfterUpdate);
  return docAfterUpdate;
};
