import TransactionsListItem from './TransactionsListItem.tsx'
import Input from "./Input.tsx";
import {useSearchParams} from "react-router-dom"

function TransactionsList({transactions, onDelete}) {
    const [searchParams, setSearchParams] = useSearchParams();

    const filtered = transactions.filter(item =>
        item.title.toLowerCase().includes(searchParams.get("search") || ''.toLowerCase())
    )

    return (
        <>
            <div className="border border-gray-200 bg-white shadow-xs rounded-xl">

                <div
                    className="border-b border-gray-200 px-8 py-6 flex gap-4 justify-between flex-col md:flex-row md:items-center">
                    <div>
                        <h2 className="text-2xl font-semibold text-slate-700">
                            Last transactions
                        </h2>
                        <p className="mt-2 text-lg text-slate-500">
                            Check your last transactions
                        </p>
                    </div>

                    <Input
                        id="search"
                        inputType="text"
                        name="search"
                        placeholder="Search transaction..."
                        label="Search"
                        className='search'
                        value={searchParams.get("search") || ""}
                        onChange={(e) => {
                            setSearchParams({search: e.target.value})
                        }}
                    />
                </div>

                <div className="table-transaction overflow-x-auto block">
                    <table className="w-full text-left overflow-scroll">

                        <thead className="bg-gray-50 text-slate-500 text-lg">
                        <tr>
                            <th className="px-8 py-4 font-medium">Title</th>
                            <th className="px-8 py-4 font-medium">Description</th>
                            <th className="px-8 py-4 font-medium">Date</th>
                            <th className="px-8 py-4 font-medium">Amount</th>
                            <th className="px-8 py-4 font-medium">Delete</th>
                            <th className="px-8 py-4 font-medium">Edit</th>
                        </tr>
                        </thead>

                        <tbody className="text-lg text-slate-700">

                        {filtered.map((item) => (
                            <TransactionsListItem
                                key={item.id}
                                item={item}
                                onDelete={() => onDelete(item.id)}
                            />
                        ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}


export default TransactionsList
