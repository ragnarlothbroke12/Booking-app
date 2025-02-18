import { Button, Navbar, TextInput } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai';
import { DarkThemeToggle } from "flowbite-react";
import {FaMoon} from 'react-icons/fa';

const Header = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Sync theme with localStorage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="bg-white dark:bg-black text-gray-800 dark:text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-red-500">
            🎥 Booking App
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-red-500">
            Home
          </Link>
          <Link to="/movies" className="hover:text-red-500">
            Movies
          </Link>
          <Link to="/profile" className="hover:text-red-500">
            My Profile
          </Link>
        </nav>

        <Button className="w-12 h-10 hidden sm:inline" color='gray' pill>
           <FaMoon /> 
        </Button>

         {/* Search Bar */}
         <form>
        <TextInput
            type="text"
            placeholder="Search Movies..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
        />
       </form>
       <Button className="w-12 h-10 lg:hidden" color='gray' pill>
        <AiOutlineSearch/>
       </Button>
        <Link to='/sign-in'>
         <Button gradientDuoTone='purpleToBlue' pill>Sign In</Button>   
        </Link>
      </div>
    </header>
  );
};

export default Header;
