import Header from "./components/Header.tsx";
import TextImage from "./components/TextImage.tsx";
import Features from "./components/Features.tsx";
import Faq from "./components/Faq.tsx";
import Footer from "./components/Footer.tsx";
import useWeather from './hooks/useWeather.tsx'

function App() {
    const {weather} = useWeather();

    return (
        <>
            <Header weather={weather}/>
            <main>
                <TextImage/>
                <Features/>
                <Faq/>
            </main>
            <Footer/>
        </>
    );
}

export default App
