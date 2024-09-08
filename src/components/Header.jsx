import { useState } from "react";
import KnusWonenLogo from "../assets/logo.png";
import search from "../assets/search.svg";
import userIcon from "../assets/user.svg";
import Modal from "../components/Modal";

// Header component with navigation and modal functionality.
const Header = () => {
    // State to manage modal visibility.
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Toggle modal visibility.
    const handleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <>
            <nav className="nav px-8 py-3 sticky top-0 z-20 bg-white flex w-full justify-between lg:pl-[143px] lg:pr-[132px] lg:h-20">
                <div className="flex items-center">
                    {/* Display logo image */}
                    <img
                        className="logo w-32 md:w-full"
                        src={KnusWonenLogo}
                        alt="KnusWonen-logo"
                    />
                </div>
                {/* Navigation items */}
                <ul className="nav-items hidden md:flex gap-6 text-[#39468C] xl:mr-[150px] font-semibold items-center">
                    <li><a href="">Ik huur</a></li>
                    <li><a href="">Ik zoek</a></li>
                    <li><a href="">Over ons</a></li>
                    <li><a href="">Projecten</a></li>
                </ul>
                <div onClick={handleModal} className="flex gap-5 items-center">
                    {/* Search icon */}
                    <img className="w-7" src={search} alt="search-icon" />
                    {/* Hamburger menu for mobile view */}
                    <div className="flex md:hidden flex-col gap-2">
                        <span className="block h-0.5 w-8 bg-gray-600"></span>
                        <span className="block h-0.5 w-8 bg-gray-600"></span>
                        <span className="block h-0.5 w-8 bg-gray-600"></span>
                    </div>
                    {/* User icon (visible only on larger screens) */}
                    <img className="hidden md:inline-block w-7" src={userIcon} alt="user-icon" />
                </div>
            </nav>
            {/* Modal component */}
            <Modal IsOpen={isModalVisible} />
        </>
    );
};

export default Header;
