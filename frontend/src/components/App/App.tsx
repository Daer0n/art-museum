import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Favorites from "../../pages/Favorites/Favorites";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
