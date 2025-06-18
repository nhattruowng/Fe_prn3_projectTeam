import {Route, Routes} from "react-router-dom";
import React from 'react';
import MainLayout from "../layouts/MainLayout.tsx";
import Home from "../pages/Home.tsx";
import Login from "../pages/Login.tsx";
import SignUp from "../pages/SignUp.tsx";
import ForgotPassword from "../pages/ForgotPassword.tsx";
import TechBlog from "../pages/TechBlog.tsx";


const AppRouter: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/blog" element={<TechBlog/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/forgot-password" element={<ForgotPassword/>}/>


        </Routes>
    );
}

export default AppRouter;