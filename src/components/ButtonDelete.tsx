import Delete from "../assets/svg/Delete.tsx";

function ButtonDelete({onClick}) {
    return (

        <>
            <button className="text-xl font-normal p-2" onClick={onClick}>
                <Delete/>
            </button>
        </>
    )
}


export default ButtonDelete