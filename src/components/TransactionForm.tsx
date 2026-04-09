import {useState} from 'react'
import ButtonSubmit from "./ButtonSubmit.tsx";

function TransactionForm({ onSubmit }) {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')

    return (

        <>
            <div className="border border-gray-200 bg-white p-6 shadow-xs rounded-xl">
                <h2 className="mb-4 md:mb-8 text-2xl font-semibold text-slate-700">Add Transaction</h2>

                <form className="form">
                    <div className="form-inner mb-4">
                        <label htmlFor="title" className="mb-2 block md:text-xl font-medium text-slate-800">Title</label>
                        <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="h-10 md:h-16 w-full rounded-2xl border border-gray-200 bg-slate-100 px-5 md:text-xl outline-none"/>
                    </div>

                    <div className="form-inner mb-4">
                        <label htmlFor="amount" className="mb-2 block md:text-xl font-medium text-slate-800">Amount</label>
                        <input
                            id="amount"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="h-10 md:h-16 w-full rounded-2xl border border-gray-200 bg-slate-100 px-5 md:text-xl outline-none"/>
                    </div>

                    <div className="form-inner mb-4">
                        <label htmlFor="description"
                               className="mb-2 block md:text-xl font-medium text-slate-800">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full rounded-2xl border border-gray-200 bg-slate-100 px-5 py-4 md:text-xl outline-none max-h-[200px]"></textarea>
                    </div>

                    <ButtonSubmit onClick={() => onSubmit({title, amount, description})} />

                </form>

            </div>
        </>
    )
}


export default TransactionForm
