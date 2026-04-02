function TransactionsListItem({item, onDelete}) {
    return (
        <>
            <tr className="border-t border-gray-200" key={item?.id}>
                <td className="px-8 py-5 font-medium">{item?.title}</td>
                <td className="px-8 py-5">{item?.description}</td>
                <td className="px-8 py-5">{item?.date ? new Date(item.date).toLocaleDateString() : 'N/A'}</td>
                <td className="px-8 py-5 font-medium">${item?.amount}</td>
                <td className="px-8 py-5 text-gray-400 text-xl" >
                    <button className="text-xl font-normal p-2" onClick={onDelete}>Delete</button>
                </td>
            </tr>
        </>
    )
}


export default TransactionsListItem
