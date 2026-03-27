import TransactionsListItem from './TransactionsListItem.tsx'

function TransactionsList() {
    return (
        <>
            <div className="border border-gray-200 bg-white shadow-xs rounded-xl">

                <div className="border-b border-gray-200 px-8 py-6">
                    <h2 className="text-2xl font-semibold text-slate-700">
                        Last transactions
                    </h2>
                    <p className="mt-2 text-lg text-slate-500">
                        Check your last transactions
                    </p>
                </div>

                <div className="table-transaction overflow-x-auto block">
                    <table className="w-full text-left overflow-scroll">

                        <thead className="bg-gray-50 text-slate-500 text-lg">
                        <tr>
                            <th className="px-8 py-4 font-medium">Title</th>
                            <th className="px-8 py-4 font-medium">Description</th>
                            <th className="px-8 py-4 font-medium">Date</th>
                            <th className="px-8 py-4 font-medium">Amount</th>
                            <th className="px-8 py-4 font-medium"></th>
                        </tr>
                        </thead>

                        <tbody className="text-lg text-slate-700">

                        <TransactionsListItem/>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}


export default TransactionsList
