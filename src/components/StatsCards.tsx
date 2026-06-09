import StatCardItem from './StatCardItem.tsx'
import {useMemo, useState} from "react";
import Success from "../assets/svg/Success.tsx";
import IconEdit from "../assets/svg/IconEdit.tsx";
import clsx from "clsx";


function StatsCards({transactions}) {
    const totalExpenses = transactions.reduce((acc, item) => {
        return acc + Number(item.amount);
    }, 0);

    const [isEditingIncome, setIsEditingIncome] = useState(false);
    const [incomeValue, setIncomeValue] = useState("");
    const [incomes, setIncomes] = useState(0);

     function handleSaveIncomes() {

        setIncomes(Number(incomeValue));

        setIsEditingIncome(false)
    }

    const balance =  incomes - totalExpenses;


    return (
        <>
            <section id="stats-cards" className="stats-cards px-4 mt-8 mb-6">
                <ul className="stats-cards-list container mx-auto flex gap-2 flex-col md:gap-8 md:flex-row">
                    <StatCardItem
                        title="Balance"
                        amount={balance}
                        className='text-blue-700'
                    />

                    {isEditingIncome ? (
                        <li className="stats-cards-item bg-white border text-sm border-gray-200 p-4 md:p-6 rounded-xl flex-1 shadow-xs">
                            <p className="stats-cards-title text-slate-500 mb-2">Incomes</p>
                            <div className="flex gap-2">
                                 <span className="stats-cards-amount text-3xl md:text-4xl font-semibold text-slate-600">
                               $
                            </span>
                                <input
                                    value={incomeValue}
                                    type='number'
                                    onChange={(e) => setIncomeValue(e.target.value)}
                                    className="rounded-lg border border-gray-200 px-3 py-1 text-xl font-semibold outline-none"
                                />

                                <button className="profile-name-edit" onClick={handleSaveIncomes}>
                                    <Success />
                                </button>
                            </div>
                        </li>
                    ) : (
                        <li className="stats-cards-item bg-white border text-sm border-gray-200 p-4 md:p-6 rounded-xl flex-1 shadow-xs">
                            <p className="stats-cards-title text-slate-500 mb-2">Incomes</p>

                            <span className="stats-cards-amount text-3xl md:text-4xl font-semibold text-slate-600">
                               ${incomes}
                            </span>

                            <button onClick={() => setIsEditingIncome(true)}>
                                <IconEdit />
                            </button>
                        </li>
                    )}

                    <StatCardItem
                    title="Expenses"
                    amount={totalExpenses}
                    className='text-slate-600'
                    />
                </ul>
            </section>
        </>
    )
}


export default StatsCards
