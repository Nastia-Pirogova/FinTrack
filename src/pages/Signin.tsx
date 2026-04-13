import Input from "../components/Input.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import ButtonSubmit from "../components/ButtonSubmit.tsx";
// import {useState} from "react";

export default function Signin({weather }) {

    return (
        <>
            <Header weather={weather}/>
            <main>
                <section className="signin px-4 mt-20 mb-6">
                    <div className="border border-gray-200 mx-auto bg-white p-6 shadow-xs rounded-xl container max-w-[800px]">
                        <h1 className="mb-4 md:mb-8 text-3xl font-bold text-center text-slate-700">Sign In</h1>

                        <form className="form">
                            <Input
                                id="email"
                                inputType="email"
                                name="email"
                                label="Email"
                                // value=""
                            />
                            <Input
                                id="password"
                                inputType="password"
                                name="password"
                                label="Password"
                                // value=""
                            />
                            <ButtonSubmit title="Sign In" id="signin" type="submit"/>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}