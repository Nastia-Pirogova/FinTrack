import clsx from "clsx";

function Button({onClick, title, className}) {
    return (

        <>
            <button className={clsx(className, 'text-xl p-2 py-4 px-4 font-medium header-menu-link inline-flex items-center justify-center rounded-lg bg-blue-600 flex-1  md:px-6 shrink-0 space-nowrap')} onClick={onClick}>
                {title}
            </button>
        </>
    )
}


export default Button