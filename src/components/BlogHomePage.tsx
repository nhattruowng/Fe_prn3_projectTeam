import React, {useEffect, useMemo, useState} from "react";
import {Link} from "react-router-dom";
import {useGetBlog} from "../hooks/useBlogHooks.ts";
import type {BlogFillterRequet} from "../modole/request/BlogFillterRequet.ts";
import type {GetBlogRespont} from "../modole/respont/BlogRespont.ts";
import CommentDialog from "./CommentScreen.tsx";

export const BlogHomePage: React.FC = () => {

    const [blog, setBlog] = useState<GetBlogRespont>();
    const [open, setOpen] = useState<boolean>(false);

    const dataRequet = useMemo<BlogFillterRequet>(() => ({
        PageNumber: 1,
        PageSize: 3,
        filterType: 1,
        status: 1
    }), []);

    const {data, loading, run} = useGetBlog();

    useEffect(() => {
        run(dataRequet);
    }, [dataRequet]);


    const handleBlog = (Blog: GetBlogRespont) => {
        setOpen(false);
        setTimeout(() => {
            setBlog(Blog);
            setOpen(true);
        }, 10);
    }

    return (
        <>
            <div id="success-stories" className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Chia sẻ cộng đồng
                        </h2>
                        <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                            Những câu chuyện cộng đồng
                        </p>
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div
                                className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"/>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {data?.items.map((value) => (
                                <div
                                    onClick={() => handleBlog(value)}
                                    key={value.id}
                                    className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                                >
                                    <img
                                        src={value.featuredImageUrl}
                                        alt={value.title}
                                        className="h-48 w-full object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800 truncate">
                                            {value.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 line-clamp-3 mt-2">
                                            {value.content}
                                        </p>
                                        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                                            <span>Lượt xem: {value.views}</span>
                                            <span>{value.authorName ? value.authorName : "Ẩn danh"}</span>
                                        </div>
                                        <div className="text-xs text-gray-400 mt-1">
                                            {new Date(value.publishedDate).toLocaleDateString("vi-VN")}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="mt-12 text-center">
                        <Link
                            to="/blogs"
                            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                        >
                            Xem Thêm Câu Chuyện
                            <i className="fas fa-arrow-right ml-2"></i>
                        </Link>
                    </div>
                </div>
            </div>
            {
                open && blog && (
                    <CommentDialog GetBlogRespont={blog.id}
                                   onClose={() => {
                                       setOpen(false);
                                       setBlog(undefined)
                                   }
                                   }/>
                )
            }
        </>
    );
};
