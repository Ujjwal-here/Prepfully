import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import {SearchButton} from "./SearchButton";


const Navbar = ({searchValue, setSearchValue}) => {
    return (
        <nav className="py-4 px-6 gap-5 flex items-center justify-between bg-[#1B191A] lg:py-5 lg:px-12 lg:gap-10 ">
            <Logo/>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
            <SearchButton/>
        </nav>
    );
};

export default Navbar;
