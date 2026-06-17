import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import useWeather from "../hooks/useWeather.tsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading.tsx";
import Input from "../components/Input.tsx";
import Button from "../components/Button.tsx";
import {useNavigate} from "react-router-dom";
import {getTransactionById} from "../services/transactionsService.ts";
import {saveTransaction} from "../services/saveTransaction.ts";
import TextEditor from "../components/TextEditor.tsx";
import {formatDate} from "../services/dateService";

export default function TransactionPage() {
    const {weather} = useWeather();
    const {id} = useParams();
    const {user} = useAuth();

    const [transaction, setTransaction] = useState(null);
    const navigate = useNavigate();


    const [form, setForm] = useState({
        title: "",
        amount: "",
        description: "",
        date: "",
    });

    useEffect(() => {
        const getTransaction = async () => {
            if (!id || !user) return;


            const data = await getTransactionById(id, user.uid);

            if (!data) return;

            setTransaction(data);

            setForm({
                title: data.title || "",
                amount: data.amount || "",
                description: data.description || "",
                date: data.createdAt || "",
            });

        };

        getTransaction();
    }, [id, user]);

    if (!transaction) {
        return <Loading/>;
    }


    const handleSave = async () => {
        if (!id || !user) return;

        try {
            await saveTransaction(form, user.uid, id);
            navigate("/dashboard");
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <Header weather={weather}/>

            <main className="min-h-screen bg-slate-50">
                <section className="px-4 py-20">
                    <div className="container mx-auto max-w-3xl">
                        <div className="mb-8">
                            <p className="text-sm font-medium uppercase tracking-wide text-blue-600">
                                Transaction details
                            </p>

                            <h1 className="mt-2 text-3xl font-bold text-slate-800">
                                Edit transaction
                            </h1>

                            <p className="mt-2 text-slate-500">
                                Review and update your transaction information.
                            </p>

                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div className="rounded-xl bg-slate-50 p-5">
                                    <p className="text-sm font-medium text-slate-400">
                                        Title
                                    </p>
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
                                </div>

                                <div className="rounded-xl bg-slate-50 p-5">
                                    <p className="text-sm font-medium text-slate-400">
                                        Amount
                                    </p>
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
                                </div>

                                <div className="rounded-xl bg-slate-50 p-5 sm:col-span-2">
                                    <p className="text-sm font-medium text-slate-400">
                                        Description
                                    </p>
                                    <div className="mt-2 text-lg text-slate-700">
                                        <TextEditor value={form.description} onChange={(value) =>
                                            setForm({...form, description: value})}/>
                                    </div>
                                </div>

                                <div className="rounded-xl bg-slate-50 p-5 sm:col-span-2">
                                    <p className="text-sm font-medium text-slate-400">
                                        Date
                                    </p>
                                    <p className="mt-2 text-lg font-semibold text-slate-700">
                                        {formatDate(form.date)}
                                    </p>
                                </div>
                            </div>


                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
                                <Button onClick={handleSave} title={'Save changes'} className='text-white'/>
                                <Button
                                    onClick={() => navigate("/dashboard")}
                                    title={'Cancel'}
                                    className='border border-slate-300 bg-white md:px-6 text-slate-900 hover:bg-slate-50'
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </>
    );
}


