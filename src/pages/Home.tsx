import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDialog, setActiveDialog] = useState<string | null>(null);

    // Thêm keyframes cho animation
    const style = document.createElement("style");
    style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes scaleIn {
      from { transform: scale(1.1); }
      to { transform: scale(1); }
    }
    
    .animate-fadeIn {
      animation: fadeIn 1.5s ease-out forwards;
    }
    
    .animate-scaleIn {
      animation: scaleIn 2s ease-out forwards;
    }
  `;
    document.head.appendChild(style);

    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };

    return (
        <div className="min-h-screen bg-gray-100 font-sans">

            <div className="relative pt-16">
                <div className="absolute inset-0 overflow-hidden animate-fadeIn">
                    <img
                        src="/hero-image.jpg"
                        alt="Hít thở không khí trong lành"
                        className="w-full h-full object-cover object-top animate-scaleIn"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-600/90 to-transparent animate-fadeIn"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-24 md:py-32 lg:py-40">
                        <div className="max-w-lg">
                            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                                Hành Trình Đến Với Cuộc Sống Không Khói Thuốc
                            </h1>
                            <p className="mt-6 text-xl text-white">
                                Tham gia cùng hàng nghìn người đã thành công cai thuốc lá với chương trình hỗ trợ hiệu quả của chúng tôi.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/signup"
                                    className="px-8 py-3 text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-100 md:py-4 md:text-lg md:px-10"
                                >
                                    Bắt Đầu Hành Trình
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Leaderboard Section */}
            <div className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Bảng Xếp Hạng Thành Tích
                        </h2>
                        <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                            Xem những thành viên xuất sắc trong hành trình cai thuốc lá.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-yellow-400">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="h-16 w-16 rounded-full bg-yellow-100 flex items-center justify-center">
                                        <i className="fas fa-trophy text-yellow-400 text-2xl"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-xl font-bold text-gray-900">Nguyễn Văn A</h3>
                                        <p className="text-sm text-gray-600">365 ngày không hút thuốc</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-bold text-green-600">18.250.000 đ</p>
                                    <p className="text-sm text-gray-600">Tiết kiệm được</p>
                                </div>
                            </div>
                            <div className="mt-6 flex justify-between items-center">
                                <div className="flex space-x-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <i className="fas fa-leaf mr-1"></i> Cao Thủ
                  </span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    <i className="fas fa-heart mr-1"></i> Kiên Trì
                  </span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-gray-400">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">
                                        <i className="fas fa-medal text-gray-400 text-2xl"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-xl font-bold text-gray-900">Trần Thị B</h3>
                                        <p className="text-sm text-gray-600">180 ngày không hút thuốc</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-bold text-green-600">9.000.000 đ</p>
                                    <p className="text-sm text-gray-600">Tiết kiệm được</p>
                                </div>
                            </div>
                            <div className="mt-6 flex justify-between items-center">
                                <div className="flex space-x-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    <i className="fas fa-star mr-1"></i> Quyết Tâm
                  </span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                    <i className="fas fa-fire mr-1"></i> Tiến Bộ
                  </span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-400">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center">
                                        <i className="fas fa-award text-orange-400 text-2xl"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-xl font-bold text-gray-900">Lê Văn C</h3>
                                        <p className="text-sm text-gray-600">90 ngày không hút thuốc</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-bold text-green-600">4.500.000 đ</p>
                                    <p className="text-sm text-gray-600">Tiết kiệm được</p>
                                </div>
                            </div>
                            <div className="mt-6 flex justify-between items-center">
                                <div className="flex space-x-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                    <i className="fas fa-bolt mr-1"></i> Nỗ Lực
                  </span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                    <i className="fas fa-sun mr-1"></i> Tích Cực
                  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Weekly Progress Stats */}
                    <div className="mt-12 bg-white rounded-lg shadow-md p-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-green-600">1.234</div>
                                <p className="mt-2 text-sm text-gray-600">Người đang cai thuốc</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-green-600">89%</div>
                                <p className="mt-2 text-sm text-gray-600">Tỷ lệ thành công</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-green-600">456M</div>
                                <p className="mt-2 text-sm text-gray-600">Tổng tiền tiết kiệm</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-green-600">78K</div>
                                <p className="mt-2 text-sm text-gray-600">Điếu thuốc không hút</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div id="how-it-works" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Cách Hoạt Động
                        </h2>
                        <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                            Ba bước đơn giản để cai thuốc lá thành công.
                        </p>
                    </div>
                    <div className="mt-16">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mx-auto">
                                    <span className="text-2xl font-bold">1</span>
                                </div>
                                <h3 className="mt-6 text-xl font-medium text-gray-900 text-center">
                                    Lập Kế Hoạch Cá Nhân
                                </h3>
                                <p className="mt-4 text-gray-600 text-center">
                                    Làm bài đánh giá và nhận kế hoạch cai thuốc lá được cá nhân hóa phù hợp với thói quen và lối sống của bạn.
                                </p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mx-auto">
                                    <span className="text-2xl font-bold">2</span>
                                </div>
                                <h3 className="mt-6 text-xl font-medium text-gray-900 text-center">
                                    Theo Dõi Tiến Trình
                                </h3>
                                <p className="mt-4 text-gray-600 text-center">
                                    Theo dõi hành trình của bạn với các công cụ dễ sử dụng, hiển thị sự cải thiện sức khỏe và số tiền tiết kiệm.
                                </p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mx-auto">
                                    <span className="text-2xl font-bold">3</span>
                                </div>
                                <h3 className="mt-6 text-xl font-medium text-gray-900 text-center">
                                    Nhận Hỗ Trợ
                                </h3>
                                <p className="mt-4 text-gray-600 text-center">
                                    Kết nối với cộng đồng và các chuyên gia để được khuyến khích, tư vấn và hỗ trợ trách nhiệm.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Stories Section */}
            <div id="success-stories" className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Câu Chuyện Thành Công
                        </h2>
                        <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                            Những con người thật, kết quả thật. Hãy xem thành viên cộng đồng của chúng tôi đã đạt được gì.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <div className="flex items-center mb-6">
                                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <i className="fas fa-user text-green-600"></i>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Nguyễn Văn H</h3>
                                    <p className="text-sm text-green-600">Không hút thuốc 1 năm</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">
                                "Sau 15 năm hút thuốc, tôi không nghĩ mình có thể bỏ. Hệ thống hỗ trợ và công cụ ở đây đã thay đổi mọi thứ. Tôi khỏe mạnh hơn, giàu có hơn và hạnh phúc hơn!"
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <div className="flex items-center mb-6">
                                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <i className="fas fa-user text-green-600"></i>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Trần Thị M</h3>
                                    <p className="text-sm text-green-600">Không hút thuốc 8 tháng</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">
                                "Cộng đồng đã giúp tôi chịu trách nhiệm khi cơn thèm thuốc đến. Công cụ theo dõi tiến trình cho thấy sự cải thiện sức khỏe đã thúc đẩy tôi tiếp tục."
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <div className="flex items-center mb-6">
                                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <i className="fas fa-user text-green-600"></i>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Lê Văn K</h3>
                                    <p className="text-sm text-green-600">Không hút thuốc 6 tháng</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">
                                "Kế hoạch cá nhân hóa đã giải quyết các tác nhân và thói quen cụ thể của tôi. Các buổi tư vấn là yếu tố thay đổi trong những thời điểm khó khăn. Tôi đã tiết kiệm được hơn 5 triệu đồng!"
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <Link
                            to="/success-stories"
                            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                        >
                            Xem Thêm Câu Chuyện
                            <i className="fas fa-arrow-right ml-2"></i>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Support Tools Section */}
            <div id="resources" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Công Cụ Hỗ Trợ
                        </h2>
                        <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                            Mọi thứ bạn cần để thành công trên hành trình không khói thuốc.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                                <i className="fas fa-chart-line text-green-600"></i>
                            </div>
                            <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                                Theo Dõi Tiến Trình
                            </h3>
                            <p className="mt-2 text-sm text-gray-600 text-center">
                                Theo dõi sự cải thiện sức khỏe, cơn thèm thuốc và số tiền tiết kiệm theo thời gian thực.
                            </p>
                            <div className="mt-4 text-center">
                                <button
                                    onClick={() => setActiveDialog("tracker")}
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700"
                                >
                                    Truy Cập
                                    <i className="fas fa-chevron-right ml-1 text-xs"></i>
                                </button>
                            </div>
                        </div>
                        {activeDialog === "tracker" && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                                <div className="bg-white rounded-lg p-8 max-w-lg w-full mx-4">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-xl font-bold text-gray-900">Theo Dõi Tiến Trình</h3>
                                        <button
                                            onClick={() => setActiveDialog(null)}
                                            className="text-gray-600 hover:text-gray-800"
                                        >
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="bg-green-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm text-gray-600">Ngày không hút thuốc</p>
                                                    <p className="text-2xl font-bold text-green-600">15</p>
                                                </div>
                                                <i className="fas fa-calendar-check text-green-600 text-3xl"></i>
                                            </div>
                                        </div>
                                        <div className="bg-green-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm text-gray-600">Tiền tiết kiệm</p>
                                                    <p className="text-2xl font-bold text-green-600">3.750.000 đ</p>
                                                </div>
                                                <i className="fas fa-piggy-bank text-green-600 text-3xl"></i>
                                            </div>
                                        </div>
                                        <div className="bg-green-50 rounded-lg p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm text-gray-600">Điểm sức khỏe</p>
                                                    <p className="text-2xl font-bold text-green-600">85%</p>
                                                </div>
                                                <i className="fas fa-heartbeat text-green-600 text-3xl"></i>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setActiveDialog(null)}
                                            className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                                        >
                                            Đóng
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                                <i className="fas fa-comments text-green-600"></i>
                            </div>
                            <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                                Hỗ Trợ Trò Chuyện
                            </h3>
                            <p className="mt-2 text-sm text-gray-600 text-center">
                                Hỗ trợ trò chuyện 24/7 để giúp đỡ ngay lập tức khi gặp cơn thèm thuốc hoặc khó khăn.
                            </p>
                            <div className="mt-4 text-center">
                                <button
                                    onClick={() => setActiveDialog("chat")}
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700"
                                >
                                    Truy Cập
                                    <i className="fas fa-chevron-right ml-1 text-xs"></i>
                                </button>
                            </div>
                        </div>
                        {activeDialog === "chat" && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                                <div className="bg-white rounded-lg p-8 max-w-lg w-full mx-4">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-xl font-bold text-gray-900">Hỗ Trợ Trò Chuyện</h3>
                                        <button
                                            onClick={() => setActiveDialog(null)}
                                            className="text-gray-600 hover:text-gray-800"
                                        >
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="bg-gray-100 rounded-lg p-4 h-64 overflow-y-auto">
                                            <div className="space-y-4">
                                                <div className="flex items-start">
                                                    <div className="bg-green-100 rounded-lg p-3 max-w-[80%]">
                                                        <p className="text-sm text-gray-800">Xin chào! Chúng tôi có thể giúp gì cho bạn hôm nay?</p>
                                                        <p className="text-xs text-gray-600 mt-1">Đội ngũ hỗ trợ • 10:30 AM</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                placeholder="Nhập tin nhắn..."
                                                className="flex-1 border border-gray-400 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                            />
                                            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                                                <i className="fas fa-paper-plane"></i>
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => setActiveDialog(null)}
                                            className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
                                        >
                                            Đóng Trò Chuyện
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                                <i className="fas fa-user-md text-green-600"></i>
                            </div>
                            <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                                Tư Vấn Chuyên Nghiệp
                            </h3>
                            <p className="mt-2 text-sm text-gray-600 text-center">
                                Các buổi tư vấn cá nhân với các cố vấn chứng nhận về cai nghiện.
                            </p>
                            <div className="mt-4 text-center">
                                <button
                                    onClick={() => setActiveDialog("counseling")}
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700"
                                >
                                    Truy Cập
                                    <i className="fas fa-chevron-right ml-1 text-xs"></i>
                                </button>
                            </div>
                        </div>
                        {activeDialog === "counseling" && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                                <div className="bg-white rounded-lg p-8 max-w-lg w-full mx-4">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-xl font-bold text-gray-900">Tư Vấn Chuyên Nghiệp</h3>
                                        <button
                                            onClick={() => setActiveDialog(null)}
                                            className="text-gray-600 hover:text-gray-800"
                                        >
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-green-50 rounded-lg p-4 text-center">
                                                <i className="fas fa-video text-green-600 text-2xl mb-2"></i>
                                                <h4 className="font-medium">Buổi Tư Vấn Video</h4>
                                                <p className="text-sm text-gray-600 mt-1">45 phút</p>
                                            </div>
                                            <div className="bg-green-50 rounded-lg p-4 text-center">
                                                <i className="fas fa-phone text-green-600 text-2xl mb-2"></i>
                                                <h4 className="font-medium">Tư Vấn Qua Điện Thoại</h4>
                                                <p className="text-sm text-gray-600 mt-1">30 phút</p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <h4 className="font-medium mb-2">Cố Vấn Có Sẵn</h4>
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                                            <i className="fas fa-user text-gray-600"></i>
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="font-medium">TS. Nguyễn Thị Lan</p>
                                                            <p className="text-sm text-gray-600">Chuyên gia cai nghiện</p>
                                                        </div>
                                                    </div>
                                                    <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                                                        Đặt Lịch
                                                    </button>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                                            <i className="fas fa-user text-gray-600"></i>
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="font-medium">TS. Trần Văn Minh</p>
                                                            <p className="text-sm text-gray-600">Chuyên gia tâm lý</p>
                                                        </div>
                                                    </div>
                                                    <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                                                        Đặt Lịch
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setActiveDialog(null)}
                                            className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                                        >
                                            Đóng
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                                <i className="fas fa-users text-green-600"></i>
                            </div>
                            <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                                Diễn Đàn Cộng Đồng
                            </h3>
                            <p className="mt-2 text-sm text-gray-600 text-center">
                                Kết nối với những người cùng hành trình để nhận mẹo, động lực và tình bạn.
                            </p>
                            <div className="mt-4 text-center">
                                <button
                                    onClick={() => setActiveDialog("community")}
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700"
                                >
                                    Truy Cập
                                    <i className="fas fa-chevron-right ml-1 text-xs"></i>
                                </button>
                            </div>
                        </div>
                        {activeDialog === "community" && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                                <div className="bg-white rounded-lg p-8 max-w-lg w-full mx-4">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-xl font-bold text-gray-900">Diễn Đàn Cộng Đồng</h3>
                                        <button
                                            onClick={() => setActiveDialog(null)}
                                            className="text-gray-600 hover:text-gray-800"
                                        >
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="space-y-4">
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h4 className="font-medium">Thảo Luận Mới Nhất</h4>
                                                    <button className="text-green-600 hover:text-green-700 text-sm">
                                                        Bài Đăng Mới
                                                    </button>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <p className="font-medium">Mẹo kiểm soát cơn thèm thuốc</p>
                                                            <p className="text-sm text-gray-600">32 phản hồi • 2 giờ trước</p>
                                                        </div>
                                                        <i className="fas fa-chevron-right text-gray-600"></i>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <p className="font-medium">Kỷ niệm 1 tháng không hút thuốc!</p>
                                                            <p className="text-sm text-gray-600">45 phản hồi • 5 giờ trước</p>
                                                        </div>
                                                        <i className="fas fa-chevron-right text-gray-600"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-green-50 rounded-lg p-4">
                                                <h4 className="font-medium mb-2">Nhóm Hoạt Động</h4>
                                                <div className="space-y-2">
                                                    <button className="w-full text-left px-3 py-2 rounded bg-white hover:bg-gray-50">
                                                        <div className="flex items-center">
                                                            <i className="fas fa-users text-green-600 mr-2"></i>
                                                            <span>Hỗ Trợ Người Mới (125 thành viên)</span>
                                                        </div>
                                                    </button>
                                                    <button className="w-full text-left px-3 py-2 rounded bg-white hover:bg-gray-50">
                                                        <div className="flex items-center">
                                                            <i className="fas fa-star text-green-600 mr-2"></i>
                                                            <span>Câu Chuyện Thành Công (89 thành viên)</span>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setActiveDialog(null)}
                                            className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                                        >
                                            Đóng
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

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
                                src="/benefits-timeline.jpg"
                                alt="Lợi ích sức khỏe theo thời gian"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="mt-10 lg:mt-0">
                            <div className="space-y-6">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                                            <i className="fas fa-heart"></i>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Cải Thiện Sức Khỏe Tim Mạch</h3>
                                        <p className="mt-2 text-gray-600">
                                            Chỉ 20 phút sau khi bỏ thuốc, nhịp tim của bạn giảm xuống. Trong vòng 3 tháng, tuần hoàn và chức năng phổi cải thiện đáng kể.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                                            <i className="fas fa-lungs"></i>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Phục Hồi Hô Hấp</h3>
                                        <p className="mt-2 text-gray-600">
                                            Trong vòng 1-9 tháng, ho và khó thở giảm khi chức năng phổi cải thiện và lông mao phát triển trở lại.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                                            <i className="fas fa-coins"></i>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Tự Do Tài Chính</h3>
                                        <p className="mt-2 text-gray-600">
                                            Người hút thuốc trung bình tiết kiệm được 50-100 triệu đồng mỗi năm sau khi bỏ thuốc – số tiền có thể đầu tư vào những điều bạn thực sự yêu thích.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                                            <i className="fas fa-smile"></i>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Nâng Cao Chất Lượng Cuộc Sống</h3>
                                        <p className="mt-2 text-gray-600">
                                            Cải thiện vị giác và khứu giác, nhiều năng lượng hơn, làn da đẹp hơn, giảm lo âu và trầm cảm.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                                            <i className="fas fa-shield-alt"></i>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Giảm Nguy Cơ Bệnh Tật</h3>
                                        <p className="mt-2 text-gray-600">
                                            Sau 5-15 năm, nguy cơ đột quỵ, bệnh tim và các loại ung thư giảm mạnh, gần đạt mức của người không hút thuốc.
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
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
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