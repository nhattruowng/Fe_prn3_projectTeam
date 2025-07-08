import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store.ts";
import { useCreatNewBlog } from "../hooks/BlogHooks.ts";
import type { CreatBlog } from "../modole/request/BlogFillterRequet.ts";

type Props = {
    onClose: () => void;
    isOpen: boolean;
};

const DialogCreateBlog: React.FC<Props> = ({ onClose, isOpen }) => {
    const user = useSelector((state: RootState) => state.user.user);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [successMessage, setSuccessMessage] = useState("");

    const {
        run: createBlog,
        loading: createBlogLoading,
        data: createBlogData,
    } = useCreatNewBlog();

    const handleSubmit = async () => {
        const data: CreatBlog = {
            FeaturedImage: image,
            Content: content,
            Title: title,
        };

        try {
            await createBlog(data, user?.accessToken || "");
        } catch (error) {
            console.error("Lỗi tạo bài viết", error);
        }
    };

    // Xử lý sau khi gọi API xong
    useEffect(() => {
        if (createBlogData) {
            setSuccessMessage("🎉 Tạo bài viết thành công!");
            setTimeout(() => {
                setSuccessMessage("");
                onClose();
            }, 1500);
        }
    }, [createBlogData]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-lg space-y-4">
                <h2 className="text-xl font-bold">Tạo Bài Viết Mới</h2>

                {successMessage && (
                    <div className="text-green-600 font-medium">{successMessage}</div>
                )}

                <input
                    type="text"
                    placeholder="Tiêu đề"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    placeholder="Nội dung"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full border rounded-xl px-4 py-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files?.[0] || null)}
                    className="w-full"
                />

                <div className="flex justify-end space-x-4 pt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 rounded-xl hover:bg-gray-400"
                        disabled={createBlogLoading}
                    >
                        Hủy
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={createBlogLoading}
                        className={`px-4 py-2 rounded-xl text-white ${
                            createBlogLoading
                                ? "bg-blue-300 cursor-wait"
                                : "bg-blue-600 hover:bg-blue-700"
                        }`}
                    >
                        {createBlogLoading ? "Đang gửi..." : "Gửi"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DialogCreateBlog;
