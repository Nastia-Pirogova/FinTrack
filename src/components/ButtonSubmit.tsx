function ButtonSubmit({ onClick, title, id }) {
    return (

        <>
            <button type="button" id={id} onClick={onClick}
                    className="h-14 md:h-16 w-full rounded-2xl bg-blue-600 text-xl font-medium text-white transition hover:bg-blue-700">
                {title}
            </button>
        </>
    )
}


export default ButtonSubmit