import { Dispatch, SetStateAction } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  User,
} from 'firebase/auth';
import { getDatabase, ref, get, set, child } from 'firebase/database';
import uuidv4 from '../utils/uuidv4';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_APP_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_APP_FIREBASE_PRODJECT_ID,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const dbRef = ref(getDatabase(app));

export function login() {
  signInWithPopup(auth, provider).catch((err) => {
    console.log(err);
  });
}

export function logout() {
  signOut(auth).catch((err) => console.log(err));
}

type DispatchType = Dispatch<SetStateAction<User | null>>;
export function onUserStateChange(callback: DispatchType) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

async function adminUser(user: User) {
  return get(child(dbRef, 'admins')).then((snapshot) => {
    if (snapshot.exists()) {
      const admins = snapshot.val();
      const isAdmin = admins.includes(user.uid);
      return { ...user, isAdmin };
    }
    return user;
  });
}

export async function addNewBook(additem: any, img_url: any) {
  const id = uuidv4();
  set(child(dbRef, `books/${id}`), {
    ...additem,
    id,
    img_url,
  });
}
