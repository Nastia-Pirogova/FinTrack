//import {useState} from 'react'
//import TransactionForm from './TransactionForm.tsx'


function TransactionsListItem() {

    //const [list, setList] = useState([]);

    // function addItem() {
    //     setList([...list, "новий елемент"]);
    // }
    return (
        <>
            {/*{list.map((item) => (*/}

            {/*))}*/}
            <tr className="border-t border-gray-200">
                <td className="px-8 py-5 font-medium">Netflix</td>
                <td className="px-8 py-5">Credit card</td>
                <td className="px-8 py-5">2024/03/29</td>
                <td className="px-8 py-5 font-medium">-$9.90</td>
                <td className="px-8 py-5 text-gray-400 text-xl">
                    <button className="text-xl font-normal p-2">Delete</button>
                </td>
            </tr>
        </>
    )
}


export default TransactionsListItem
