import Input from "../components/Input.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import ButtonSubmit from "../components/ButtonSubmit.tsx";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import useWeather from "../hooks/useWeather.tsx";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {doc, setDoc} from "firebase/firestore";
import {auth, db} from "../firebase";
import {updateProfile} from "firebase/auth";

const signupSchema = z.object({
    name: z.string().min(2, "Enter a name"),
    email: z.email({pattern: z.regexes.html5Email}),
    password: z.string().min(8, "Invalid password, minimum 8 characters"),
});

export default function Signup({onClick}) {
    const {weather} = useWeather();
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        resolver: zodResolver(signupSchema),
    });

    // const onSubmitForm = (data) => {
    //     console.log("signup data:", data);
    //     reset();
    // };

    const onSubmitForm = async (data) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            const user = userCredential.user;

            await updateProfile(user, {
                displayName: data.name,
            });

            await setDoc(doc(db, "users", user.uid), {
                firebaseId: user.uid,
                name: user.displayName,
                email: user.email,
                createdAt: new Date().toISOString(),
            });

            console.log("registered user:", user);
            reset();
        } catch (error: any) {
            console.error("Registration error:", error.message);
        }
    };

    return (
        <>
            <Header weather={weather}/>
            <main>
                <section className="signin px-4 mt-20 mb-6">
                    <div
                        className="border border-gray-200 mx-auto bg-white p-6 shadow-xs rounded-xl container max-w-[800px]">
                        <h1 className="mb-4 md:mb-8 text-3xl font-bold text-center text-slate-700">Sign Up</h1>

                        <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
                            <Input
                                id="name"
                                inputType="text"
                                name="name"
                                label="Name"
                                register={register}
                                className={errors.name ? "border-red-500" : ''}
                            />
                            {errors.name && <p className="error-input absolute">{errors.name.message}</p>}
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
                            <ButtonSubmit title="Sign In" id="signin" onClick={onClick} className={'mt-3.5'}/>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}