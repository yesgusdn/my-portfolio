import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Sidebar from "../Components/Sidebar";

const Router = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <BrowserRouter>
                <div className="flex flex-col min-h-screen p-3 w-1/6 rounded-xl bg-gray-50">
                    <Sidebar />
                </div>
                <div className="flex-1 p-5 rounded-xl">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default Router;
