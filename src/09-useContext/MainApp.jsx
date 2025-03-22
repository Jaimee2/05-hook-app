import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import LoginPage from "./LoginPage.jsx";
import AboutPage from "./AboutPage.jsx";
import NavBar from "./NavBar.jsx";
import UserProvider from "./Context/UserProvider.jsx";

function MainApp(props) {
    return (
        <UserProvider>
            <div className="flex flex-row">
                <h3 className="h3-primary">Main App</h3>
                <NavBar/>
            </div>
            <hr/>
            <Routes>
                <Route path="/" element={ <HomePage/> }/>
                <Route path="/login" element={ <LoginPage/> }/>
                <Route path="/about" element={ <AboutPage/> }/>

                {/*<Route path="/*" element={ <HomePage/> }/>*/ }

                <Route path="/*" element={ <Navigate to="/about"/> }/>
            </Routes>
        </UserProvider>
    );
}

export default MainApp;