import React from "react";
import {LogOut, Pencil} from "lucide-react";

export const ProfileElement: React.FC = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden relative">
            {/* Ảnh bìa + Avatar */}
            <div className="relative">
                <img
                    src="https://placekitten.com/400/120"
                    alt="banner"
                    className="w-full h-24 object-cover"
                />
                <img
                    src="https://placekitten.com/100/100"
                    alt="avatar"
                    className="absolute left-1/2 -bottom-10 transform -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white"
                />
            </div>

            {/* Nội dung */}
            <div className="pt-14 pb-4 text-center px-4">
                <h2 className="text-lg font-semibold">John Doe</h2>
                <p className="text-gray-500 text-sm mt-1">
                    Web Developer | Cat Lover
                </p>

                <div className="mt-4 flex justify-center gap-4">
                    <button
                        className="flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition">
                        <Pencil size={16}/> Chỉnh sửa
                    </button>
                    <button
                        className="flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-red-100 text-red-600 hover:bg-red-200 transition">
                        <LogOut size={16}/> Đăng xuất
                    </button>
                </div>
            </div>
        </div>
    );
};
