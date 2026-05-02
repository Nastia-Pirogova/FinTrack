import clsx from "clsx";

export default function Input({inputType, label, id, name, className, register, accept, ...rest}) {

    return (
        <>
            <div className="form-inner mb-4">
                {label && (
                    <label
                        htmlFor={id}
                        className="mb-2 block md:text-xl font-medium text-slate-800"
                    >
                        {label}
                    </label>
                )}

                <input
                    id={id}
                    type={inputType}
                    name={name}
                    {...(register && name ? register(name) : {})}
                    {...rest}
                    accept = {accept}
                    className={clsx(className, 'h-10 md:h-16 w-full rounded-2xl border border-gray-200 bg-slate-100 px-5 md:text-xl outline-none')}/>
            </div>

        </>
    )
}