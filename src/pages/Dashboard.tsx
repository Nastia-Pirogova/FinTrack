import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import useWeather from "../hooks/useWeather.tsx";
import useTransactions from "../hooks/useTransactions.tsx";
import StatsCards from "../components/StatsCards.tsx";
import TransactionForm from "../components/TransactionForm.tsx";
import TransactionsList from "../components/TransactionsList.tsx";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal.tsx";
import useModalDeleteTransaction from "../hooks/useModalDeleteTransaction.tsx";

export default function Dashboard() {
    const {weather} = useWeather();
    const {transactions, deleteItem, addItem} = useTransactions()

    const modalConfirmDelete = useModalDeleteTransaction(deleteItem);

    return (
        <>
            <Header weather={weather}/>
            <main>
                <StatsCards transactions={transactions}/>
                <section id="transaction" className="transaction px-4 mb-4">
                    <div className="container mx-auto grid gap-8 xl:grid-cols-[1fr_2fr] grid-cols-1  justify-between">
                        <TransactionForm onSubmit={addItem}/>
                        <TransactionsList
                            transactions={transactions}
                            onDelete={modalConfirmDelete.openModal}
                        />
                    </div>
                </section>
                <ConfirmDeleteModal
                    isOpen={modalConfirmDelete.isOpen}
                    onClose={modalConfirmDelete.closeModal}
                    onConfirm={modalConfirmDelete.confirmDelete}
                />

            </main>
            <Footer/>
        </>
    )
}