import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import useWeather from "../hooks/useWeather.tsx";
import useTransactions from "../hooks/useTransactions.tsx";
import StatsCards from "../components/StatsCards.tsx";
import TransactionForm from "../components/TransactionForm.tsx";
import TransactionsList from "../components/TransactionsList.tsx";
import Modal from "../components/Modal.tsx";
import useModalTransaction from "../hooks/useModalTransaction.tsx";


export default function Dashboard() {
    const {weather} = useWeather();
    const {transactions, deleteItem, addItem, editItem} = useTransactions()

    const modal = useModalTransaction();

    return (
        <>
            <Header weather={weather}/>
            <main>
                <StatsCards/>
                <section id="transaction" className="transaction px-4 mb-4">
                    <div className="container mx-auto grid gap-8 xl:grid-cols-[1fr_2fr] grid-cols-1  justify-between">
                        <TransactionForm onSubmit={addItem}/>
                        <TransactionsList
                            transactions={transactions}
                            onDelete={deleteItem}
                            onOpenModal={modal.openModal}
                        />
                    </div>
                </section>
                <Modal
                       isOpen={modal.isOpen}
                       onClose={modal.closeModal}
                       data={modal.selected}
                       editItem={editItem}
                />
            </main>
            <Footer/>
        </>
    )
}