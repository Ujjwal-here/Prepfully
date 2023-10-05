import './App.css';
import Navbar from "./components/Navbar";
import {useState} from "react";
import {WeatherCard} from "./components/WeatherCard";
import {ClipLoader} from "react-spinners";

function App() {
    const [loading, setLoading] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [weatherData, setWeatherData] = useState("")
    const [previousSearchValue,setPreviousSearchValue]=useState("")
    const [err,setErr]=useState(null)



    async function getWeatherData(unit) {
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${process.env.REACT_APP_API_KEY}&units=${unit}`
        try {
            setLoading(true)
            const response = await fetch(weatherApiUrl)
            const data = await response.json()
            setWeatherData(data)
            setLoading(false)
        } catch (error) {
            setErr(error.message)
        }
    }

    function renderLogic() {
        if(err) return <div className="flex justify-center my-60 text-xl sm:text-3xl text-white">
            {err}
        </div>
        if (searchValue === "") return <div className="flex justify-center mt-60 text-xl sm:text-3xl text-white">
                Try Searching Your Favourite City
            </div>

        if (searchValue!==previousSearchValue){
            return <div className="flex justify-center my-60 text-xl sm:text-3xl text-white">
                Hold On Searching.....
            </div>
        }
        if (loading) {
            return <div className="flex justify-center my-60">
                <ClipLoader size={90} color="yellow"/>
            </div>
        } else {
            if (weatherData?.cod === 200) {
                return <WeatherCard getWeatherData={getWeatherData} weatherData={weatherData}/>
            }
            else {
                return <div className="flex justify-center mt-60 text-xl sm:text-3xl text-white">
                    {weatherData?.message?.toUpperCase()}
                </div>
            }
        }
    }

    return (
    <div className="App">
        <Navbar searchValue={searchValue} setSearchValue={setSearchValue} getWeatherData={getWeatherData} setPreviousSearchValue={setPreviousSearchValue}/>
        {renderLogic()}
    </div>
  );
}

export default App;
