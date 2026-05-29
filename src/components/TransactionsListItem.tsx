import ButtonDelete from './ButtonDelete.tsx'
import ButtonEdit from './ButtonEdit.tsx'
import { useNavigate } from "react-router-dom";
import sanitizeHml from "sanitize-html";

function TransactionsListItem({item, onDelete}) {
    const navigate = useNavigate();
    const cleanHtml = sanitizeHml(item?.description);

    return (
        <>
            <tr className="border-t border-gray-200" key={item?.id}>
                <td className="px-8 py-5 font-medium">{item?.title}</td>
                <td className="px-8 py-5"  dangerouslySetInnerHTML={{ __html: cleanHtml }}></td>
                <td className="px-8 py-5">{item?.date ? new Date(item.date).toLocaleDateString() : 'N/A'}</td>
                <td className="px-8 py-5 font-medium">${item?.amount}</td>
                <td className="px-8 py-5 text-gray-400 text-xl">
                    <ButtonDelete onClick={onDelete}/>
                </td>
                <td className="px-8 py-5 text-gray-400 text-xl">
                    <ButtonEdit
                        onEdit={() => navigate(`/dashboard/transactions/${item.id}`)}
                    />
                </td>
            </tr>
        </>
    )
}


export default TransactionsListItem
