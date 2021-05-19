import key from "../keys.json"
import admin from "firebase-admin"

admin.initializeApp({
  credential: admin.credential.cert(key)
});

const db = admin.firestore();

const allUsers = async () => {
    // const snapshot = await db.collection('Users').get();
    // snapshot.forEach((doc) => {
    //     console.log(doc.id, '=>', doc.data());
    // })
} 

export default allUsers