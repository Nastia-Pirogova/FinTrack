import clsx from "clsx";

function StatCardItem({title, amount, className}) {
    return (
        <>

            <li className="stats-cards-item bg-white border text-sm border-gray-200 p-4 md:p-6 rounded-xl flex-1 shadow-xs">
                <p className="stats-cards-title text-slate-500 mb-2">{title}</p>
                <div className={clsx(className, 'stats-cards-amount text-3xl md:text-4xl font-semibold')}>${amount}</div>
            </li>
        </>
    )
}


export default StatCardItem
