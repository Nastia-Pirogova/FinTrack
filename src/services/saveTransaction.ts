import {db} from "../firebase";
import {doc, updateDoc} from "firebase/firestore";

export const saveTransaction = async (form, userId, transactionId) => {
    await updateDoc(
        doc(
            db,
            "users",
            userId,
            "transactions",
            transactionId
        ),
        {
            title: form.title,
            amount: form.amount,
            description: form.description,
        }
    );
};