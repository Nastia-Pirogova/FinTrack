import TransactionForm from './components/TransactionForm.tsx'
import TransactionsList from './components/TransactionsList.tsx'
import StatsCards from './components/StatsCards.tsx'
import Header from "./components/Header.tsx";
import useWeather from './hooks/useWeather.tsx'
import useTransactions from './hooks/useTransactions.tsx'
import Footer from "./components/Footer.tsx";


function App() {
    const {weather} = useWeather();
    const {transactions, deleteItem, addItem} = useTransactions()

    return (
        <>
            <Header weather={weather}/>
            <main>
                <StatsCards/>

                <section id="transaction" className="transaction px-4 mb-4">
                    <div className="container mx-auto grid gap-8 xl:grid-cols-[1fr_2fr] grid-cols-1  justify-between ">
                        <TransactionForm onSubmit={addItem}/>
                        <TransactionsList transactions={transactions} onDelete={deleteItem}/>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default App
