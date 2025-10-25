import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {

    return (

        <nav className="flex items-center justify-between bg-amber-600 text-white py-4 px-6">
            <Link to="/"  className="font-bold text-xl hover:text-amber-200 transition-colors duration-200">
            Focus Bear
            </Link>

            <div className="flex gap-6 text-lg font-medium">
                <Link to="/" className="hover:text-amber-200 transition-colors duration-200">
                    Home
                </Link>
                <Link to="/profile" className="hover:text-amber-200 transition-colors duration-200">
                    Profile
                </Link>
            </div>
        </nav>
    )
}

export default NavigationBar;