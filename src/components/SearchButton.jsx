export const SearchButton = ({getWeatherData}) => {
    return (
        <button onClick={getWeatherData} className="bg-yellow-400 rounded px-6 py-2 font-semibold">Search</button>
    )
}