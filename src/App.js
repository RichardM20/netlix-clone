import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './home/home';
import LandingPage from "./home/landing/landing";
import SignIn from './home/sign_in/signin';
import { useEffect } from 'react';
import { auth } from './home/sign_in/f_base/config';
import { UserAuthContextProvider } from './provider/context';
import ProtectedRoute from './components/protected/protected_route';
function App() {
    return (
        <div className='App'>
            <UserAuthContextProvider>
                <Router>
                    <Routes>
                        <Route exact path="/" element={
                            <LandingPage />} />
                        <Route exact path="/home"
                            element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            } />
                        <Route exact path="/signin" element={<SignIn />} />
                        <Route render={() => <h1>404 Not found</h1>} />
                    </Routes>
                </Router>
            </UserAuthContextProvider>
        </div >
    );
}
export default App;