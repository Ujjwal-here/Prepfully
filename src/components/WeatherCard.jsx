export const WeatherCard = ({weatherData}) => {
    return (
        <section className="px-4 text-white py-20 flex justify-center">
            <div className="border border-yellow-400 p-12 rounded-md">
                <h1 className="text-5xl pb-4 font-bold">{weatherData?.name}</h1>
                <hr/>
                <div className="pt-4">
                    <img className="inline" src={`https://openweathermap.org/img/wn/${weatherData?.weather?.[0].icon}.png`} alt="Weather"/>
                    <span className="text-yellow-300">{weatherData?.weather?.[0].description.toUpperCase()}</span>
                </div>
                <p className="pt-2 text-gray-300">{`Temperature - ${weatherData?.main?.temp}`}</p>
                <p className="pt-2 text-gray-300">{`Description - ${weatherData?.weather?.[0].description.toUpperCase()}`}</p>
                <p className="pt-2 text-gray-300">{`Humidity - ${weatherData?.main?.humidity}`}</p>
                <p className="pt-2 text-gray-300">{`Speed - ${weatherData?.wind?.speed}`}</p>
            </div>
        </section>
    )
}