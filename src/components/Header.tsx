import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";
import {UserCircle} from "lucide-react";

const Header: React.FC = () => {
    const user = useSelector((state: RootState) => state.user.user);

    return (
        <header className="bg-white shadow-md border-b border-gray-200">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo + tiêu đề */}
                <div className="flex items-center space-x-3">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="h-10 w-10"
                    />
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                        Hỗ trợ Cai Thuốc Lá
                    </h1>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
                    <a href="/" className="hover:text-blue-600 hover:underline transition">
                        Trang Chủ
                    </a>
                    <a href="/tips" className="hover:text-blue-600 hover:underline transition">
                        Mẹo Cai Thuốc
                    </a>
                    <a href="/resources" className="hover:text-blue-600 hover:underline transition">
                        Tài Nguyên
                    </a>
                    <Link to="/blogs" className="hover:text-blue-600 hover:underline transition">
                        Diễn Đàn
                    </Link>
                </nav>

                <div className="flex items-center space-x-4">
                    {
                        user ? (
                            <Link to="/profile" className="flex items-center space-x-2 text-gray-700">
                                <UserCircle className="w-6 h-6"/>
                                <span className="font-semibold">{user.fullName}</span>
                            </Link>
                        ) : (
                            <Link
                                to="/login"
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition font-medium"
                            >
                                Đăng Nhập
                            </Link>
                        )
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;
