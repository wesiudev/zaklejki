import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDocs,
  collection,
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
} // shop products
async function getProducts() {
  const docRef = doc(db, websiteName, "products");
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}
async function addProduct(imageData) {
  const docRef = doc(db, websiteName, "products");
  const docSnap = await getDoc(docRef);
  if (!docSnap.data()) {
    await setDoc(doc(db, websiteName, "products"), { products: [imageData] });
  } else {
    await updateDoc(doc(db, websiteName, "products"), {
      products: arrayUnion(imageData),
    });
  }
}
async function addArrayOfProducts(imageArray) {
  const docRef = doc(db, websiteName, "products");
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    // If the document doesn't exist, create it with the given array
    await setDoc(doc(db, websiteName, "products"), { products: imageArray });
  } else {
    const existingProducts = docSnap.data().products;

    // Iterate through each image in the given array
    for (const imageData of imageArray) {
      // Check if the title is unique in both the database and the given array
      const isTitleUnique =
        existingProducts.every(
          (product) => product.title !== imageData.title
        ) &&
        imageArray.every(
          (image) => image !== imageData && image.title !== imageData.title
        );

      if (isTitleUnique) {
        // If the title is unique, add the image to the array using arrayUnion
        await updateDoc(doc(db, websiteName, "products"), {
          products: arrayUnion(imageData),
        });
      } else {
        // If the title is not unique, generate a unique title by appending a number
        let uniqueTitle = imageData.title;
        let counter = 1;

        while (
          existingProducts.some((product) => product.title === uniqueTitle) ||
          imageArray.some(
            (image) => image !== imageData && image.title === uniqueTitle
          )
        ) {
          uniqueTitle = `${imageData.title} ${counter + 1}`;
          counter++;
        }

        imageData.title = uniqueTitle;

        // Update the image in the array
        existingProducts.push(imageData);
      }
    }

    // Update the document with the modified products array
    await updateDoc(doc(db, websiteName, "products"), {
      products: existingProducts,
    });
  }
}
async function deleteProduct(imageData) {
  const docRef = doc(db, websiteName, "products");
  await updateDoc(docRef, {
    products: arrayRemove(imageData),
  });
}
async function updateProduct(id, updatedProduct) {
  const docRef = doc(db, websiteName, "products");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const products = docSnap.data().products;

    // Check if the provided index is within the valid range
    if (id >= 0 && id < products.length) {
      // Check if the updated title is unique
      const isTitleUnique = products.every((product, index) => {
        return index === id || product.title !== updatedProduct.title;
      });

      if (isTitleUnique) {
        // Title is unique, update the product
        products[id] = updatedProduct;
      } else {
        // Generate a unique title by appending a number
        let uniqueTitle = updatedProduct.title;
        let counter = 1;

        while (products.some((product) => product.title === uniqueTitle)) {
          uniqueTitle = `${updatedProduct.title}${" "}${counter + 1}`;
          counter++;
        }

        updatedProduct.title = uniqueTitle;
        products[id] = updatedProduct;
      }

      // Update the document with the modified products array
      await updateDoc(docRef, { products: products });
    }
  }
}
// blog
async function getBlogPosts() {
  const docRef = doc(db, websiteName, "blog");
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}
async function addBlogPost(post) {
  const docRef = doc(db, websiteName, "blog");
  const docSnap = await getDoc(docRef);
  if (!docSnap.data()) {
    await setDoc(doc(db, websiteName, "blog"), { posts: [post] });
  } else {
    await updateDoc(doc(db, websiteName, "blog"), {
      posts: arrayUnion(post),
    });
  }
}
async function updateBlogPost(postId, updatedPost) {
  const docRef = doc(db, websiteName, "blog");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const posts = docSnap.data().posts;
    const postIndex = posts.findIndex((post) => post.id === postId);
    if (postIndex !== -1) {
      posts[postIndex] = updatedPost;
      await updateDoc(docRef, { posts });
    }
  }
}

async function addCart(id, data) {
  await setDoc(doc(db, "carts", id), data);
  const docRef = doc(db, "carts", id);
  const docSnapshot = await getDoc(docRef);
  return docSnapshot.data();
}
async function getCartById(id) {
  const docRef = doc(db, "carts", id);
  const docSnapshot = await getDoc(docRef);
  return docSnapshot.data();
}
async function addOrder(id, data) {
  await setDoc(doc(db, "orders", id), data);

  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);
  return docSnapshot.data();
}
async function updateOrder(keys, values, id) {
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);

  let updatedData;

  if (docSnapshot.exists()) {
    const existingData = docSnapshot.data();
    updatedData = { ...existingData };

    keys.forEach((key, index) => {
      updatedData[key] = values[index];
    });

    await updateDoc(docRef, updatedData);
  } else {
    const initialData = {};
    keys.forEach((key, index) => {
      initialData[key] = values[index];
    });

    await setDoc(docRef, initialData);
    updatedData = initialData;
  }

  return updatedData;
}
async function addSession(id, data) {
  await setDoc(doc(db, "sessions", id), data);

  const docRef = doc(db, "sessions", id);
  const docSnapshot = await getDoc(docRef);
  return docSnapshot.data();
}
async function updateSession(keys, values, id) {
  const docRef = doc(db, "sessions", id);
  const docSnapshot = await getDoc(docRef);

  let updatedData;

  if (docSnapshot.exists()) {
    const existingData = docSnapshot.data();
    updatedData = { ...existingData };

    keys.forEach((key, index) => {
      updatedData[key] = values[index];
    });

    await updateDoc(docRef, updatedData);
  } else {
    const initialData = {};
    keys.forEach((key, index) => {
      initialData[key] = values[index];
    });

    await setDoc(docRef, initialData);
    updatedData = initialData;
  }

  return updatedData;
}
async function getSessionById(id) {
  const docRef = doc(db, "sessions", id);
  const docSnapshot = await getDoc(docRef);
  return docSnapshot.data();
}

async function addCoupon(data) {
  await setDoc(doc(db, "coupons", data.id), data);

  const docRef = doc(db, "coupons", data.id);
  const docSnapshot = await getDoc(docRef);
  return docSnapshot.data();
}
async function updateCoupon(id) {
  const docRef = doc(db, "coupons", id);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    const updatedData = { ...existingData, used: true };
    await updateDoc(docRef, updatedData);
    return updatedData;
  } else {
    return { error: true, message: "Coupon not found." };
  }
}
async function getCouponById(id) {
  const docRef = doc(db, "coupons", id);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    const existingData = docSnapshot.data();
    return existingData;
  } else {
    return { error: true };
  }
}
async function getCouponByValue(value) {
  const docRef = collection(db, "coupons");
  const response = await getDocs(docRef);
  const res = response.docs.find((doc) => doc.data().value === value);
  if (res) {
    if (res.used === false) {
      return {
        coupon: res.data(),
        message: { error: false, value: "Kod promocyjny został aktywowany." },
      };
    } else {
      return {
        coupon: res.data(),
        message: {
          error: true,
          value: "Kod promocyjny został już użyty.",
        },
      };
    }
  } else {
    return { message: { error: true, value: "Kod promocyjny nie istnieje." } };
  }
}

async function getDocuments(collectionName) {
  const ref = collection(db, collectionName);
  const response = await getDocs(ref);
  const res = response.docs.map((doc) => doc.data());
  return res;
}

export {
  getCheckout,
  getCheckouts,
  updateCheckout,
  addCheckout,
  storage,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getBlogPosts,
  addBlogPost,
  updateBlogPost,
  addSession,
  updateSession,
  getSessionById,
  addArrayOfProducts,
  getCouponById,
  getDocuments,
  addCoupon,
  updateCoupon,
  getCouponByValue,
  addCart,
  getCartById,
  addOrder,
  updateOrder,
  auth,
};
