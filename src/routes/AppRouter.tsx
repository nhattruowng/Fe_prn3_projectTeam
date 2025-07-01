import {Route, Routes} from "react-router-dom";
import React from 'react';
import MainLayout from "../layouts/MainLayout.tsx";
import Home from "../pages/Home.tsx";
import Login from "../pages/Login.tsx";
import SignUp from "../pages/SignUp.tsx";
import ForgotPassword from "../pages/ForgotPassword.tsx";
import SocialMediaDashboard from "../pages/SocialMediaDashboard.tsx";
import ProfileLayout from "../layouts/ProfileLayout.tsx";
import {BlogLayout} from "../layouts/BlogLayout.tsx";
import MainBlog from "../components/MainBlog.tsx";
import {TwitterHomeFeed} from "../pages/TwitterHomeFeed.tsx";
import Calendar from "../pages/Calendar.tsx";
import {CalendarLayout} from "../layouts/CalendarLayout.tsx";
import {CardsPricingList} from "../components/CardsPricingList.tsx";
import {PaymentSuccess} from "../pages/PaymentSuccess.tsx";
import {PaymentError} from "../pages/PaymentError.tsx";


const AppRouter: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="cards-pricing" element={<CardsPricingList/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
            <Route path="profile" element={<ProfileLayout/>}>
                <Route index element={<SocialMediaDashboard/>}/>
            </Route>

            <Route path="blogs" element={<BlogLayout/>}>
                <Route index element={<TwitterHomeFeed/>}/>
                <Route path="blog" element={<MainBlog/>}/>
            </Route>
            <Route path="calendar" element={<CalendarLayout/>}>
                <Route index element={<Calendar/>}/>
            </Route>


            <Route path="payment-success" element={<PaymentSuccess/>}/>
            <Route path="payment-error" element={<PaymentError/>}/>


        </Routes>
    );
}

export default AppRouter;