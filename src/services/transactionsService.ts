import {db} from "../firebase";
import {doc, getDoc} from "firebase/firestore";


export const getTransactionById = async (transactionId, userId) => {
    const docRef = doc(
        db,
        "users",
        userId,
        "transactions",
        transactionId
    );

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = {
            id: docSnap.id,
            ...docSnap.data(),

        };
        return data;
    }

    return null;
}