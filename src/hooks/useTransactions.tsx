import {useEffect, useState} from 'react'
import {collection, onSnapshot, doc, deleteDoc, addDoc, updateDoc} from "firebase/firestore";
import {db} from "../firebase";


function useTransactions() {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        const getTransactions = onSnapshot(
            collection(db, "transactions"),
            (snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                    date: doc.data().createdAt,
                }));

                setTransactions(data);

            }
        );

        return () => getTransactions();
    }, []);


    const addItem = async (value) => {
        return  addDoc(collection(db, "transactions"), value);
    };

    const deleteItem = async (id) => {
        return  deleteDoc(doc(db, "transactions", id));
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