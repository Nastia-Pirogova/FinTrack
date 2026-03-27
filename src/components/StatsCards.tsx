//import {useState} from 'react'

function StatsCards() {

    return (
        <>
            <section id="stats-cards" className="stats-cards px-4 mt-8 mb-6">
                <ul className="stats-cards-list container mx-auto flex gap-2 flex-col md:gap-8 md:flex-row">
                    <li className="stats-cards-item bg-white border text-sm border-gray-200 p-4 md:p-6 rounded-xl flex-1 shadow-xs">
                        <p className="stats-cards-title text-slate-500 mb-2">Balance</p>
                        <div className="stats-cards-amount text-3xl md:text-4xl font-semibold text-blue-700">$5,502.45</div>
                    </li>
                    <li className="stats-cards-item bg-white border text-sm border-gray-200 p-4 md:p-6 rounded-xl flex-1 shadow-xs">
                        <p className="stats-cards-title text-slate-500 mb-2">Incomes</p>
                        <div className="stats-cards-amount text-3xl md:text-4xl font-semibold text-slate-600">$9,450.00</div>
                    </li>
                    <li className="stats-cards-item bg-white border text-sm border-gray-200 p-4 md:p-6 rounded-xl flex-1 shadow-xs">
                        <p className="stats-cards-title text-slate-500 mb-2">Expenses</p>
                        <div className="stats-cards-amount text-3xl md:text-4xl font-semibold text-slate-600">$3,945.55</div>
                    </li>
                </ul>
            </section>
        </>
    )
}


export default StatsCards
