export function getWeather() {
    let apiKey = import.meta.env.VITE_WEATHER_API_KEY

    return fetch(`https://api.openweathermap.org/geo/1.0/direct?q=Kyiv,UA&limit=1&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
           // console.log(data)

            let lat = data[0].lat;
            let lon = data[0].lon;

            return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=en`)
                .then(response => response.json())

        })
}
