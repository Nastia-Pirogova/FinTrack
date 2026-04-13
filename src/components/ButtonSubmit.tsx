function ButtonSubmit({ onClick }) {
    return (

        <>
            <button type="button" id="submit" onClick={onClick}
                    className="h-14 md:h-16 w-full rounded-2xl bg-blue-600 text-xl font-medium text-white transition hover:bg-blue-700">
                Save Transaction
            </button>
        </>
    )
}


export default ButtonSubmit