import clsx from "clsx";

function ButtonSubmit({ onClick, title, id , type,className}) {
    return (

        <>
            <button type={type} id={id} onClick={onClick}
                    className={clsx(className, 'h-14 md:h-16 w-full rounded-2xl bg-blue-600 text-xl font-medium text-white transition hover:bg-blue-700')}>

                {title}
            </button>
        </>
    )
}


export default ButtonSubmit