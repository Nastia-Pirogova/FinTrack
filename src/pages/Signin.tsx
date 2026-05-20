import Input from "../components/Input.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import ButtonSubmit from "../components/ButtonSubmit.tsx";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import useWeather from "../hooks/useWeather.tsx";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';

const signinSchema = z.object({
    email: z.email({pattern: z.regexes.html5Email}),
    password: z.string().min(8, "Invalid password, minimum 8 characters"),
});

export default function SignIn() {
    const {weather} = useWeather();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        resolver: zodResolver(signinSchema),
    });

    // const onSubmitForm = (data) => {
    //     console.log("signin data:", data);
    //     reset();
    // };

    const onSubmitForm = async (data) => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            console.log("user:", userCredential.user);
            navigate('/dashboard')
            reset();
        } catch (error) {
            console.error("Login error:", error.message);
        }
    };

    return (
        <>
            <Header weather={weather}/>
            <main>
                <section className="signin px-4 mt-20 mb-6">
                    <div
                        className="border border-gray-200 mx-auto bg-white p-6 shadow-xs rounded-xl container max-w-[800px]">
                        <h1 className="mb-4 md:mb-8 text-3xl font-bold text-center text-slate-700">Sign In</h1>

                        <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
                            <Input
                                id="email"
                                inputType="email"
                                name="email"
                                label="Email"
                                register={register}
                                className={errors.email ? "border-red-500" : ''}
                            />
                            {errors.email && <p className="error-input absolute">{errors.email.message}</p>}

                            <Input
                                id="password"
                                inputType="password"
                                name="password"
                                label="Password"
                                register={register}
                                className={errors.password ? "border-red-500" : ''}
                            />
                            {errors.password && <p className="error-input absolute">{errors.password.message}</p>}

                            <ButtonSubmit title="Sign In" id="signin" type="submit" className={'mt-3.5'}/>
                            <p className='mt-4 text-center text-gray-500'>Don't have an account? <Link to="/signup" className="text-blue-600 font-medium">Sign up</Link></p>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}