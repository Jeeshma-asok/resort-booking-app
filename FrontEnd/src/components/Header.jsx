import React from "react";
import Button from "./Botton";
import { useNavigate } from "react-router-dom";

function Header() {

    const navigator = useNavigate();

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo / Title */}
            <h1 className="font-bold text-xl">Seaside Serenity</h1>

            {/* Nav Options */}
            <nav className="flex items-center gap-6 text-sm font-medium">
            {/* Booking details button */}
            <Button
                onClick={() => navigator('/bookings')}
                variant="Orange"
                text={"View Bookings"}
                className="px-4 py-2 rounded-md transition"
            />
            </nav>
        </div>
        </header>
    );
}


export default Header