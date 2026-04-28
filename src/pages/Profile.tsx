import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import useWeather from "../hooks/useWeather.tsx";




export default function Profile() {
    const {weather} = useWeather();
    return (
        <>
            <Header weather={weather}/>
            <main>
                <section className="px-4 mt-20 mb-6">

                </section>
            </main>
            <Footer/>
        </>
    )
}