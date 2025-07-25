import React from "react";
import {Link} from "react-router-dom";
import {
    FaRegHeart,
    FaLungs,
    FaCoins,
    FaShieldAlt} from "react-icons/fa";
import {MdInsertEmoticon} from "react-icons/md";
import {Pricing} from "../components/Pricing.tsx";
import {BlogHomePage} from "../components/BlogHomePage.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";


const Home: React.FC = () => {

    const user = useSelector((state: RootState) => state.user.user)

    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            {/* Hero Section */}
            <div className="relative pt-16">
                <div className="absolute inset-0 overflow-hidden animate-fadeIn">
                    <img
                        src="/hero-image.jpg"
                        alt="Hít thở không khí trong lành"
                        className="w-full h-full object-cover object-top animate-scaleIn"
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-15% via-green-300 to-transparent animate-fadeIn"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-24 md:py-32 lg:py-40">
                        <div className="max-w-lg">
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-400 sm:text-5xl">
                                Hành Trình Đến Với Cuộc Sống Không Khói Thuốc
                            </h1>
                            <p className="mt-6 text-xl text-gray-400">
                                Tham gia cùng hàng nghìn người đã thành công cai thuốc lá với chương trình hỗ trợ hiệu
                                quả của chúng tôi.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                {
                                    user?.accessToken ? (
                                        <Link
                                            to="/signup"
                                            className="px-8 py-3 text-base font-medium rounded-md text-white bg-gray-400 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                                        >
                                            Xem Dịch Vụ
                                        </Link>
                                    ) : (
                                        <Link
                                            to="/signup"
                                            className="px-8 py-3 text-base font-medium rounded-md text-white bg-gray-400 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                                        >
                                            Bắt Đầu Hành Trình
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*/!* Leaderboard Section *!/*/}
            {/*<div className="py-16 bg-gray-100">*/}
            {/*    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
            {/*        <div className="text-center">*/}
            {/*            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">*/}
            {/*                Bảng Xếp Hạng Thành Tích*/}
            {/*            </h2>*/}
            {/*            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">*/}
            {/*                Xem những thành viên xuất sắc trong hành trình cai thuốc lá.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">*/}
            {/*            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-yellow-400">*/}
            {/*                <div className="flex items-center justify-between">*/}
            {/*                    <div className="flex items-center">*/}
            {/*                        <div*/}
            {/*                            className="h-16 w-16 rounded-full bg-yellow-100 flex items-center justify-center">*/}
            {/*                            <FaTrophy className="text-yellow-400 text-2xl"/>*/}
            {/*                        </div>*/}
            {/*                        <div className="ml-4">*/}
            {/*                            <h3 className="text-xl font-bold text-gray-900">Nguyễn Văn A</h3>*/}
            {/*                            <p className="text-sm text-gray-600">365 ngày không hút thuốc</p>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="text-right">*/}
            {/*                        <p className="text-lg font-bold text-green-600">18.250.000 đ</p>*/}
            {/*                        <p className="text-sm text-gray-600">Tiết kiệm được</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="mt-6 flex justify-between items-center">*/}
            {/*                    <div className="flex space-x-2">*/}
            {/*      <span*/}
            {/*          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">*/}
            {/*        <FaLeaf className="mr-1"/> Cao Thủ*/}
            {/*      </span>*/}
            {/*                        <span*/}
            {/*                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">*/}
            {/*        <FaHeart className="mr-1"/> Kiên Trì*/}
            {/*      </span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-gray-400">*/}
            {/*                <div className="flex items-center justify-between">*/}
            {/*                    <div className="flex items-center">*/}
            {/*                        <div*/}
            {/*                            className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">*/}
            {/*                            <FaMedal className="text-gray-400 text-2xl"/>*/}
            {/*                        </div>*/}
            {/*                        <div className="ml-4">*/}
            {/*                            <h3 className="text-xl font-bold text-gray-900">Trần Thị B</h3>*/}
            {/*                            <p className="text-sm text-gray-600">180 ngày không hút thuốc</p>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="text-right">*/}
            {/*                        <p className="text-lg font-bold text-green-600">9.000.000 đ</p>*/}
            {/*                        <p className="text-sm text-gray-600">Tiết kiệm được</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="mt-6 flex justify-between items-center">*/}
            {/*                    <div className="flex space-x-2">*/}
            {/*      <span*/}
            {/*          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">*/}
            {/*        <FaStar className="mr-1"/> Quyết Tâm*/}
            {/*      </span>*/}
            {/*                        <span*/}
            {/*                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">*/}
            {/*        <FaFire className="mr-1"/> Tiến Bộ*/}
            {/*      </span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-400">*/}
            {/*                <div className="flex items-center justify-between">*/}
            {/*                    <div className="flex items-center">*/}
            {/*                        <div*/}
            {/*                            className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center">*/}
            {/*                            <FaAward className="text-orange-400 text-2xl"/>*/}
            {/*                        </div>*/}
            {/*                        <div className="ml-4">*/}
            {/*                            <h3 className="text-xl font-bold text-gray-900">Lê Văn C</h3>*/}
            {/*                            <p className="text-sm text-gray-600">90 ngày không hút thuốc</p>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="text-right">*/}
            {/*                        <p className="text-lg font-bold text-green-600">4.500.000 đ</p>*/}
            {/*                        <p className="text-sm text-gray-600">Tiết kiệm được</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="mt-6 flex justify-between items-center">*/}
            {/*                    <div className="flex space-x-2">*/}
            {/*      <span*/}
            {/*          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">*/}
            {/*        <FaBolt className="mr-1"/> Nỗ Lực*/}
            {/*      </span>*/}
            {/*                        <span*/}
            {/*                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">*/}
            {/*        <FaSun className="mr-1"/> Tích Cực*/}
            {/*      </span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*       */}
            {/*    </div>*/}
            {/*</div>*/}

            <Pricing/>

            <BlogHomePage/>



            {/* Why Quit Benefits Section */}
            <div className="py-16 bg-gradient-to-b from-green-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Lợi Ích Của Việc Cai Thuốc Lá
                        </h2>
                        <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                            Lợi ích của việc bỏ thuốc lá bắt đầu ngay lập tức và kéo dài trong nhiều năm.
                        </p>
                    </div>
                    <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="relative">
                            <img
                                src="/bodyimage.jpg"
                                alt="Lợi ích sức khỏe theo thời gian"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="mt-10 lg:mt-0">
                            <div className="space-y-6">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div
                                            className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                                            <FaRegHeart/>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Cải Thiện Sức Khỏe Tim
                                            Mạch</h3>
                                        <p className="mt-2 text-gray-600">
                                            Chỉ 20 phút sau khi bỏ thuốc, nhịp tim của bạn giảm xuống. Trong vòng 3
                                            tháng, tuần hoàn và chức năng phổi cải thiện đáng kể.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div
                                            className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                                            <FaLungs/>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Phục Hồi Hô Hấp</h3>
                                        <p className="mt-2 text-gray-600">
                                            Trong vòng 1-9 tháng, ho và khó thở giảm khi chức năng phổi cải thiện và
                                            lông mao phát triển trở lại.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div
                                            className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-200 text-yellow-500">
                                            <FaCoins/>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Tự Do Tài Chính</h3>
                                        <p className="mt-2 text-gray-600">
                                            Người hút thuốc trung bình tiết kiệm được 50-100 triệu đồng mỗi năm sau khi
                                            bỏ thuốc – số tiền có thể đầu tư vào những điều bạn thực sự yêu thích.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div
                                            className="flex items-center justify-center h-12 w-12 rounded-md bg-violet-400 text-violet-600">
                                            <MdInsertEmoticon/>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Nâng Cao Chất Lượng Cuộc
                                            Sống</h3>
                                        <p className="mt-2 text-gray-600">
                                            Cải thiện vị giác và khứu giác, nhiều năng lượng hơn, làn da đẹp hơn, giảm
                                            lo âu và trầm cảm.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div
                                            className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-200 text-orange-600">
                                            <FaShieldAlt/>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Giảm Nguy Cơ Bệnh Tật</h3>
                                        <p className="mt-2 text-gray-600">
                                            Sau 5-15 năm, nguy cơ đột quỵ, bệnh tim và các loại ung thư giảm mạnh, gần
                                            đạt mức của người không hút thuốc.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-green-600">
                <div
                    className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        <span className="block">Sẵn sàng bắt đầu hành trình của bạn?</span>
                        <span className="block text-green-200">Bắt đầu cuộc sống không khói thuốc ngay hôm nay.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <Link
                                to="/signup"
                                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-100"
                            >
                                Đăng Ký Ngay
                            </Link>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800"
                            >
                                Liên Hệ Tư Vấn
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;