import {useEffect, useState} from 'react'
import {
    collection,
    onSnapshot,
    doc,
    deleteDoc,
    addDoc,
    updateDoc,
} from "firebase/firestore";
import {db} from "../firebase";
import useAuth from "../hooks/useAuth";

function useTransactions() {
    const [transactions, setTransactions] = useState([]);
    const {user} = useAuth();

    const transactionsRef = user
        ? collection(db, "users", user.uid, "transactions")
        : null;

    useEffect(() => {
        if (!user) {
            setTransactions([]);
            return;
        }

        const unsubscribe = onSnapshot(transactionsRef, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
                date: doc.data().createdAt,
            }));

            setTransactions(data);
        });

        return () => unsubscribe();
    }, [user]);

    const addItem = async (value) => {
        if (!user) return;

        return addDoc(
            collection(db, "users", user.uid, "transactions"),
            value
        );
    };

    const deleteItem = async (id) => {
        if (!user) return;

        return deleteDoc(
            doc(db, "users", user.uid, "transactions", id)
        );
    };

    const editItem = async (id, value) => {
        if (!user) return;

        return updateDoc(
            doc(db, "users", user.uid, "transactions", id),
            value
        );
    };

    return {
        transactions,
        addItem,
        deleteItem,
        editItem,
    };
}

export default useTransactions;