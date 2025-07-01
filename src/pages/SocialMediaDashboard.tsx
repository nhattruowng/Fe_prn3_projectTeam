import React from 'react';
import UserProfileCard from "../components/UserProfileCard.tsx";
import {ArrowLeft} from "lucide-react";

const SocialMediaDashboard: React.FC = () => {

    return (
        <main className="min-h-screen bg-white px-4 sm:px-8 py-6">
            <div className="mb-6 flex items-center gap-2 text-black cursor-pointer hover:text-blue-400 transition"
                 onClick={() => history.back()}>
                <ArrowLeft className="w-5 h-5"/>
                <span className="text-sm font-medium">Quay lại</span>
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="rounded-2xl shadow-lg bg-white p-6 md:p-8">
                    <UserProfileCard/>
                </div>
            </div>
        </main>
    );
};

export default SocialMediaDashboard;
