function WeatherWidget({weather}) {
    let forecastWeather = weather?.list?.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3) || [];

    return (

        <>
            {/*{console.log(forecastWeather)}*/}

            <div
                className="z-50 flex items-center justify-center bg-blue-600 px-2 lg:px-4 py-2 rounded-l-[8px] lg:rounded-xl min-w-max gap-4 text-white fixed lg:relative lg:top-auto lg:right-auto right-0 top-[72px]">
                <div className="flex items-center gap-3 ">
                    <img
                        src={`https://openweathermap.org/img/wn/${weather?.list[0].weather[0].icon}.png`}
                        alt="weather"
                        className="w-8 h-8"
                    />
                    <div className="flex flex-col leading-tight">
                        <span className="font-semibold text-sm">{weather?.city.name}</span>
                        <span
                            className="text-xs opacity-80">{weather?.list[0].main.temp}°C, {weather?.list[0].weather[0].main} </span>
                    </div>
                </div>

                <div className=" justify-between text-sm gap-4 hidden lg:flex">
                    {forecastWeather.map((item) => {
                        const itemDate = new Date(item.dt * 1000).toLocaleDateString("uk-UA", {
                            day: "numeric",
                            month: "numeric"
                        });
                        return (
                            <div key={item.dt} className="flex flex-col items-center">
                                <span className="opacity-70">{itemDate}</span>
                                <span className="font-semibold">
                                  {item.main.temp}°
                                </span>
                            </div>
                        );
                    })}
                </div>

            </div>

        </>
    )
}


export default WeatherWidget
