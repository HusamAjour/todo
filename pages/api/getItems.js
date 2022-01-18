import { getUserTodoItems } from "@/lib/db";
// import { auth } from "firebase-admin";
import { verifyIdToken, getAuth } from "firebase-admin/auth";
import app from "@/lib/firebase-admin";

export default async function handler(req, res) {
  try {
    const { uid } = await getAuth().verifyIdToken(req.headers.token);

    let items = await getUserTodoItems(uid);

    res.status(200).json(items);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}
