import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth, db} from "../firebase.ts";
import {doc, setDoc} from "firebase/firestore";

export const registerUser = async (data) => {
    const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
    );
    const user = userCredential.user;
    await updateProfile(user, {
        displayName: data.name,
    });

    await setDoc(doc(db, "users", user.uid), {
        firebaseId: user.uid,
        name: data.name,
        email: user.email,
        createdAt: new Date().toISOString(),
    });

    return user;
}