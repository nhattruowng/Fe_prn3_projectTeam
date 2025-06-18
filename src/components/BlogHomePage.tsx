import React, {useMemo} from "react";
import {Link} from "react-router-dom";
import {useGetBlog} from "../hooks/useBlogHooks.ts";
import type {BlogFillterRequet} from "../modole/request/BlogFillterRequet.ts";

export const BlogHomePage: React.FC = () => {

    const dataRequet = useMemo<BlogFillterRequet>(() => ({
        PageNumber: 0,
        PageSize: 3,
    }), [])

    const {data, loading} = useGetBlog(dataRequet);


    return (
        <div id="success-stories" className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Chia sẻ cộng đồng
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                        Những câu chuyện cộng đồng
                    </p>
                </div>
                {
                    loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div
                                className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        data?.items.map(value =>(
                            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                <div className="bg-white rounded-lg shadow-md p-8">
                                    <div className="flex items-center mb-6">
                                        <div
                                            className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                                            <i className="fas fa-user text-green-600"></i>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium text-gray-900">{value.authorName}</h3>
                                            <p className="text-sm text-green-600">{value.title}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 italic">
                                        {value.content}
                                    </p>
                                </div>
                            </div>
                        ))
                    )
                }

                <div className="mt-12 text-center">
                    <Link
                        to="/blog"
                        className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                    >
                        Xem Thêm Câu Chuyện
                        <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                </div>
            </div>
        </div>
    );

}