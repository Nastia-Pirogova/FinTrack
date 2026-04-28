import ButtonDelete from './ButtonDelete.tsx'
import ButtonEdit from './ButtonEdit.tsx'
import {useState} from 'react'

function TransactionsListItem({item, onDelete, onOpenModal}) {

    return (
        <>
            <tr className="border-t border-gray-200" key={item?.id}>
                <td className="px-8 py-5 font-medium">{item?.title}</td>
                <td className="px-8 py-5">{item?.description}</td>
                <td className="px-8 py-5">{item?.date ? new Date(item.date).toLocaleDateString() : 'N/A'}</td>
                <td className="px-8 py-5 font-medium">${item?.amount}</td>
                <td className="px-8 py-5 text-gray-400 text-xl">
                    <ButtonDelete onClick={onDelete}/>
                </td>
                <td className="px-8 py-5 text-gray-400 text-xl">
                    <ButtonEdit onOpenModal={() => onOpenModal(item)}/>
                </td>
            </tr>
        </>
    )
}


export default TransactionsListItem
