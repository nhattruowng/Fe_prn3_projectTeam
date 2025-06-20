import React from 'react';
import {BlogElement} from "../components/BlogElement.tsx";
import {ProfileElement} from "../components/ProfileElement.tsx";
import {CreatBlog} from "../components/CreatBlog.tsx";

const SocialMediaDashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-6 px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-[300px_1fr] gap-6">
                {/* Sidebar */}
                <aside className="space-y-6">
                    {/* Nút quay về */}
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 text-blue-600 hover:underline text-sm"
                    >
                        ← Quay về trang chủ
                    </a>

                    {/* Hồ sơ */}
                    <ProfileElement/>

                    {/* Form đăng bài */}
                    <CreatBlog/>
                </aside>

                {/* Bảng tin */}
                <main className="grid sm:grid-cols-2 gap-6 overflow-y-auto pr-2 h-[calc(100vh-48px)]">
                    {Array.from({length: 10}).map(() => (
                        <BlogElement/>
                    ))}
                </main>

            </div>
        </div>
    );
};

export default SocialMediaDashboard;
