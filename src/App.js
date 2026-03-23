import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./login/login";
import RegisterPage from "./register/register";

function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </div>
    );
}
export default App;