import TransactionForm from './components/TransactionForm.tsx'
import TransactionsList from './components/TransactionsList.tsx'
import StatsCards from './components/StatsCards.tsx'
import Header from "./components/Header.tsx";

function App() {


    return (
        <>
            <Header/>

            <StatsCards/>

            <section id="transaction" className="transaction px-4 mb-4">
                <div className="container mx-auto grid gap-8 xl:grid-cols-[1fr_2fr] grid-cols-1  justify-between ">
                    <TransactionForm/>
                    <TransactionsList/>
                </div>
            </section>


        </>
    )
}

export default App
