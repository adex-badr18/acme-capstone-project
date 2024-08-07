import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";
import Footer from "../Footer";

const RootLayout = () => {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] max-w-[100svw] overflow-hidden relative min-h-screen">
            <header>
                <Navbar />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default RootLayout;
