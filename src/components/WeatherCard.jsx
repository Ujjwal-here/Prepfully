export const WeatherCard = ({weatherData,getWeatherData}) => {
    function convertToFahrenheit(){
        getWeatherData("imperial")
    }
    function convertToCelsius(){
        getWeatherData("metric")
    }
    return (
        <section className="text-white my-12 flex justify-center">
            <div className="border border-yellow-400 p-8 sm:p-16 rounded-md">
                <h1 className="text-3xl sm:text-5xl pb-4 font-bold">{weatherData?.name}</h1>
                <hr/>
                <div className="pt-4">
                    <img className="inline"
                         src={`https://openweathermap.org/img/wn/${weatherData?.weather?.[0].icon}.png`} alt="Weather"/>
                    <span className="text-xs sm:text-lg text-yellow-300">{weatherData?.weather?.[0].description.toUpperCase()}</span>
                </div>
                <p className="text-xs sm:text-lg pt-2 text-gray-300">{`Temperature - ${weatherData?.main?.temp}`}</p>
                <p className="text-xs sm:text-lg pt-2 text-gray-300">{`Description - ${weatherData?.weather?.[0].description.toUpperCase()}`}</p>
                <p className="text-xs sm:text-lg pt-2 text-gray-300">{`Humidity - ${weatherData?.main?.humidity}`}</p>
                <p className="text-xs sm:text-lg pt-2 text-gray-300">{`Speed - ${weatherData?.wind?.speed}`}</p>
                <p className="text-xs sm:text-base pt-4 text-gray-400">Convert Temperature to:</p>
                <span onClick={convertToFahrenheit} className="text-xs sm:text-base inline-block border border-yellow-100 p-2 mt-6 rounded">Fahrenheit</span>
                <span onClick={convertToCelsius} className="text-xs sm:text-base inline-block border border-yellow-100 p-2 ml-2 rounded">Celsius</span>
            </div>
        </section>
    )
}