import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASURMENT_ID,
};

const websiteName = process.env.NEXT_PUBLIC_APP_NAME;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

// checkouts
async function getCheckout(id) {
  const docRef = doc(db, websiteName, "checkouts");
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  if (data) {
    const checkouts = data.checkouts;
    const checkout = checkouts.find((checkout) => checkout.id === id);
    return checkout;
  }
  return null;
}
async function getCheckouts() {
  const docRef = doc(db, websiteName, "checkouts");
  const docSnap = await getDoc(docRef);

  return docSnap.data();
}
async function updateCheckout(checkoutId, updatedCheckout) {
  const docRef = doc(db, websiteName, "checkouts");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const checkouts = docSnap.data().checkouts;
    const checkoutIndex = checkouts.findIndex(
      (checkout) => checkout.id === checkoutId
    );
    if (checkoutIndex !== -1) {
      const updatedCheckouts = [...checkouts];
      updatedCheckouts[checkoutIndex] = {
        ...updatedCheckout,
        payment_status: "paid",
      };
      await updateDoc(docRef, { checkouts: updatedCheckouts });
    }
  }
}
async function addCheckout(checkout) {
  const docRef = doc(db, websiteName, "checkouts");
  const docSnap = await getDoc(docRef);
  if (!docSnap.data()) {
    await setDoc(doc(db, websiteName, "checkouts"), {
      checkouts: [checkout],
    });
  } else {
    await updateDoc(doc(db, websiteName, "checkouts"), {
      checkouts: arrayUnion(checkout),
    });
  }
}

export { getCheckout, getCheckouts, updateCheckout, addCheckout };
