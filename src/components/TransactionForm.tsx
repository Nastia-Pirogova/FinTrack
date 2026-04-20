import {useState} from 'react'
import ButtonSubmit from "./ButtonSubmit.tsx";
import Input from "./Input.tsx";
import {useForm} from "react-hook-form"
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import clsx from "clsx";
import {auth, db} from "../firebase";
import {collection, addDoc} from "firebase/firestore";


const transactionSchema = z.object({
    title: z.string().min(1, "Enter a title"),
    amount: z.coerce.number().positive("Amount must be greater than 0"),
    description: z.string().min(3, "Minimum 3 characters"),
});

function TransactionForm() {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        resolver: zodResolver(transactionSchema),
    });

    const onSubmitForm = async (data) => {
        try {

            const docRef = await addDoc(collection(db, "transactions"), {
                userId: auth.currentUser?.uid,
                title: data.title,
                amount: data.amount,
                description: data.description,
                createdAt: new Date().toISOString(),
            })

            console.log("registered user:", docRef.id);
            reset();
        } catch (error: any) {
            console.error("Registration error:", error.message);
        }
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
                        className={errors.title ? "border-red-500" : ''}
                        register={register}
                    />
                    {errors.title && <p className="error-input absolute">{errors.title.message}</p>}
                    <Input
                        id="amount"
                        inputType="number"
                        name="amount"
                        label="Amount"
                        className={errors.amount ? "border-red-500" : ''}
                        register={register}
                    />
                    {errors.amount && <p className="error-input absolute">{errors.amount.message}</p>}

                    <div className="form-inner mb-4">
                        <label htmlFor="description"
                               className="mb-2 block md:text-xl font-medium text-slate-800">Description</label>
                        <textarea
                            id="description"
                            {...register("description")}
                            className={clsx(errors.description ? "border-red-500" : '', 'w-full rounded-2xl border border-gray-200 bg-slate-100 px-5 py-4 md:text-xl outline-none max-h-[200px]')}
                        ></textarea>
                    </div>
                    {errors.description &&
                        <p className="error-input error-input-textarea absolute">{errors.description.message}</p>}

                    <ButtonSubmit title='Save Transaction' id="submit" type="submit"/>

                </form>

            </div>
        </>
    )
}


export default TransactionForm
