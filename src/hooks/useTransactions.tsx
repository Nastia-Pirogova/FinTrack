import {useState} from 'react'

function useTransactions() {
    const [transactions, setTransactions] = useState([])

    function addItem(values) {
        setTransactions(prev => [
            ...prev,
            {
                ...values,
                date: new Date(),
                id: Date.now()
            }
        ])
    }

    function deleteItem(id: number) {
        return setTransactions(transactions.filter(item => item.id !== id))
    }

    return {
        transactions,
        addItem,
        deleteItem
    }
}

export default useTransactions