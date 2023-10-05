import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import {SearchButton} from "./SearchButton";


const Navbar = ({searchValue, setSearchValue, getWeatherData,setPreviousSearchValue}) => {
    return (
        <nav className="py-4 px-2 gap-3 sm:px-6 sm:gap-8 flex items-center justify-between bg-[#1B191A] lg:py-5 lg:px-12 lg:gap-10 ">
            <Logo/>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
            <SearchButton getWeatherData={getWeatherData} setPreviousSearchValue={setPreviousSearchValue} searchValue={searchValue}/>
        </nav>
    );
};

export default Navbar;
