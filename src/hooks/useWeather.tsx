import {getWeather} from "../services/weatherService";
import {useEffect, useState} from "react";

function useWeather() {
    const [weather, setWeather] = useState();

    useEffect(() => {
        getWeather()
            .then(forecast => {
                setWeather(forecast)
                //console.log(forecast)
            })
    }, []);

    return {weather};
}


export default useWeather