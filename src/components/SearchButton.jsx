export const SearchButton = ({getWeatherData,setPreviousSearchValue,searchValue}) => {
    function weatherHandler(){
        setPreviousSearchValue(searchValue)
        getWeatherData("standard")
    }
    return (
        <button onClick={weatherHandler} className="bg-yellow-400 rounded px-3 py-2 text-xs sm:px-6 sm:py-3 sm:text-base  font-semibold">Search</button>
    )
}