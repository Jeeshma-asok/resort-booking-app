import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function CommonLayout() {
    return (
        <div className="min-h-screen font-sans bg-white text-slate-900">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default CommonLayout;