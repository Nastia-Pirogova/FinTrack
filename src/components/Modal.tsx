import Input from "./Input.tsx";
import Button from "./Button.tsx";
import clsx from "clsx";
import {useState, useEffect} from "react";
import {createPortal} from 'react-dom';

function Modal({isOpen, onClose, data, editItem}) {
    const [form, setForm] = useState({
        title: "",
        amount: "",
        description: "",
    });

    useEffect(() => {
        if (data) {
            setForm({
                title: data.title,
                amount: data.amount,
                description: data.description,
            });
        }
    }, [data]);

    if (!isOpen) return null;

    const handleSave = async () => {
        if (!data) return;

        await editItem(data.id, form);

        onClose();
    };

    return createPortal(
        <>
            {isOpen && (
                <div
                    className={clsx(
                        "modal fixed flex-col items-center justify-center z-1000 bg-black/50 p-4",
                        onClose ? "flex" : "hidden"
                    )} id="modal">
                    <div
                        className="modal-content gap-2  border-gray-200 bg-white p-6 shadow-xs rounded-xl max-w-[700px] w-full">
                        <button className="modal-close ml-auto block" onClick={onClose}></button>
                        <h2 id="modal-title" className="mb-4 md:mb-6 text-2xl font-semibold text-slate-700 text-center">
                            Edit transaction
                        </h2>

                        <Input
                            id="habit-input-title"
                            inputType="text"
                            name="title"
                            label=""
                            className=""
                            placeholder="Title"
                            value={form.title}
                            onChange={(e) =>
                                setForm({...form, title: e.target.value})
                            }
                        />
                        <Input
                            id="habit-input-amount"
                            inputType="number"
                            name="amount"
                            label=""
                            className=""
                            placeholder="Amount"
                            value={form.amount}
                            onChange={(e) =>
                                setForm({...form, amount: e.target.value})
                            }
                        />
                        <Input
                            id="habit-input-description"
                            inputType="text"
                            name="description"
                            label=""
                            className=""
                            placeholder="Description"
                            value={form.description}
                            onChange={(e) =>
                                setForm({...form, description: e.target.value})
                            }
                        />

                        <div className="modal-actions flex gap-2 mt-8">
                            <Button onClick={handleSave} title={'Save'} className='text-white'/>
                            <Button
                                onClick={onClose}
                                title={'Cancel'}
                                className='border border-slate-300 bg-white md:px-6 text-slate-900 hover:bg-slate-50'
                            />
                        </div>
                    </div>
                </div>
            )}
        </>, document.body
    )
}


export default Modal