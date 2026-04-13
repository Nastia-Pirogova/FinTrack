import {useState} from 'react'
import ButtonSubmit from "./ButtonSubmit.tsx";
import Input from "./Input.tsx";
import {useForm} from "react-hook-form"

function TransactionForm({onSubmit}) {
    const { register, handleSubmit, reset } = useForm();

    const onSubmitForm = (data) => {
        onSubmit(data);
        reset();
    };

    return (

        <>
            <div className="border border-gray-200 bg-white p-6 shadow-xs rounded-xl">
                <h2 className="mb-4 md:mb-8 text-2xl font-semibold text-slate-700">Add Transaction</h2>

                <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
                    <Input
                        id="title"
                        inputType="title"
                        name="title"
                        label="Title"
                        register={register}
                    />

                    <Input
                        id="amount"
                        inputType="number"
                        name="amount"
                        label="Amount"
                        register={register}
                    />


                    <div className="form-inner mb-4">
                        <label htmlFor="description"
                               className="mb-2 block md:text-xl font-medium text-slate-800">Description</label>
                        <textarea
                            id="description"
                            {...register("description")}
                            className="w-full rounded-2xl border border-gray-200 bg-slate-100 px-5 py-4 md:text-xl outline-none max-h-[200px]"></textarea>
                    </div>

                    <ButtonSubmit title='Save Transaction' id="submit" type="submit"/>

                </form>

            </div>
        </>
    )
}


export default TransactionForm
