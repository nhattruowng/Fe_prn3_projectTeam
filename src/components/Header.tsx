import React from 'react';
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="border-gray-500 text-black shadow-lg">
            <div className="container mx-auto px-4 py-6 flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        src="/logo.png"
                        alt="Logo Hỗ trợ Cai Thuốc Lá"
                        className="h-12 w-12 mr-3"
                    />
                    <h1 className="text-2xl font-bold">
                        Hỗ trợ Cai Thuốc Lá
                    </h1>
                </div>
                <div className="flex items-center space-x-6">
                    <nav className="flex space-x-6">
                        <a
                            href="/"
                            className="hover:text-3xl transition-colors duration-200"
                        >
                            Trang Chủ
                        </a>
                        <a
                            href="/tips"
                            className="hover:text-3xl transition-colors duration-200"
                        >
                            Mẹo Cai Thuốc
                        </a>
                        <a
                            href="/resources"
                            className="hover:text-3xl transition-colors duration-200"
                        >
                            Tài Nguyên
                        </a>
                        <a
                            href="/contact"
                            className="hover:text-3xl transition-colors duration-200"
                        >
                            Liên Hệ
                        </a>
                    </nav>
                    <Link
                        to="/login"
                        className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-400 hover:text-black transition-colors duration-200 font-medium"
                    >
                        Đăng Nhập
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;