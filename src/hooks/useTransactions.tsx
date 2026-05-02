import {useEffect, useState} from 'react'
import {collection, onSnapshot, doc, deleteDoc, addDoc, updateDoc, query, where} from "firebase/firestore";
import {db} from "../firebase";
import useAuth from "../hooks/useAuth";


function useTransactions() {
    const [transactions, setTransactions] = useState([])
    const {user} = useAuth();

    useEffect(() => {
        if (!user) return;

        const q = query(
            collection(db, "transactions"),
            where("userId", "==", user.uid)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
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
        return addDoc(collection(db, "transactions"), value);
    };

    const deleteItem = async (id) => {
        return deleteDoc(doc(db, "transactions", id));
    };

    const editItem = async (id, value) => {
        return updateDoc(doc(db, "transactions", id), value);
    };

    return {
        transactions,
        addItem,
        deleteItem,
        editItem,

    }
}

export default useTransactions