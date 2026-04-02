import TransactionForm from './components/TransactionForm.tsx'
import TransactionsList from './components/TransactionsList.tsx'
import StatsCards from './components/StatsCards.tsx'
import Header from "./components/Header.tsx";
import {useState} from 'react'

function App() {
    const [transactions, setTransactions] = useState([]);

    function deleteItem(id) {
        return setTransactions(transactions.filter(item => item.id !== id))

    }

    return (
        <>
            <Header/>

            <StatsCards/>

            <section id="transaction" className="transaction px-4 mb-4">
                <div className="container mx-auto grid gap-8 xl:grid-cols-[1fr_2fr] grid-cols-1  justify-between ">
                    <TransactionForm onSubmit={(values) => {
                        setTransactions([
                            ...transactions,
                            {
                                ...values,
                                date: new Date(),
                                id: Date.now()
                            }
                        ])
                    }}/>
                    <TransactionsList transactions={transactions} onDelete={deleteItem}/>
                </div>
            </section>


        </>
    )
}

export default App
