import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import useWeather from "../hooks/useWeather.tsx";
import useTransactions from "../hooks/useTransactions.tsx";
import StatsCards from "../components/StatsCards.tsx";
import TransactionForm from "../components/TransactionForm.tsx";
import TransactionsList from "../components/TransactionsList.tsx";
import Modal from "../components/Modal.tsx";
import useModalDeleteTransaction from "../hooks/useModalDeleteTransaction.tsx";
import Button  from "../components/Button";

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
                    <div className="container mx-auto grid gap-8 2xl:grid-cols-[1fr_2fr] grid-cols-1  justify-between">
                        <TransactionForm onSubmit={addItem}/>
                        <TransactionsList
                            transactions={transactions}
                            onDelete={modalConfirmDelete.openModal}
                        />
                    </div>
                </section>
                <Modal isOpen={modalConfirmDelete.isOpen}>
                    <h2 className="mb-4 text-2xl font-semibold text-slate-700 text-center">
                        Are you sure you want to delete this transaction?
                    </h2>

                    <p className="text-center text-slate-600">
                        This action cannot be undone.
                    </p>

                    <div className="flex gap-2 mt-8">
                        <Button
                            onClick={modalConfirmDelete.confirmDelete}
                            title="Yes"
                            className="text-white"
                        />

                        <Button
                            onClick={modalConfirmDelete.closeModal}
                            title="No"
                            className="border border-slate-300 bg-white md:px-6 text-slate-900 hover:bg-slate-50"
                        />
                    </div>
                </Modal>
            </main>
            <Footer/>
        </>
    )
}