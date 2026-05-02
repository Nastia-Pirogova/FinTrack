import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import useWeather from "../hooks/useWeather.tsx";
import ProfileHeader from "../components/ProfileHeader.tsx";


export default function Profile() {
    const {weather} = useWeather();

    return (
        <>
            <Header weather={weather}/>
            <main className="min-h-screen bg-gray-50">

                <div className="mx-auto space-y-6 mt-10">
                    <div className="container px-4 flex items-center justify-between flex-col gap-4 w-full mx-auto">
                        <div className="w-full">
                            <h1 className="mb-4 text-2xl font-semibold text-slate-700">Profile</h1>
                            <p className="text-sm text-gray-500">Manage your account settings</p>
                        </div>

                        <ProfileHeader/>

                        {/*<button*/}
                        {/*    className="w-full py-4 rounded-xl border border-red-300 text-red-500 font-semibold hover:bg-red-50 transition">*/}
                        {/*    Log Out*/}
                        {/*</button>*/}
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}