import Edit from '../assets/svg/Edit.tsx'


function ButtonEdit({onEdit}) {
    return (

        <>
            <button className="text-xl font-normal p-2" onClick={onEdit}>
                <Edit/>
            </button>

        </>

    )
}


export default ButtonEdit