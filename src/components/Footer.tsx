import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="border-gray-600 text-black py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Hỗ trợ Cai Thuốc Lá</h3>
                        <p className="text-sm">
                            Chúng tôi cam kết giúp bạn từ bỏ thuốc lá và sống một cuộc sống lành mạnh hơn.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/about"
                                    className="text-sm hover:text-2xl transition-colors duration-200"
                                >
                                    Về Chúng Tôi
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/tips"
                                    className="text-sm hover:text-2xl transition-colors duration-200"
                                >
                                    Mẹo Cai Thuốc
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/resources"
                                    className="text-sm hover:text-2xl transition-colors duration-200"
                                >
                                    Tài Nguyên
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="text-sm hover:text-2xl transition-colors duration-200"
                                >
                                    Liên Hệ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Liên Hệ</h3>
                        {/*<p className="text-sm">Email: support@caithuocla.vn</p>*/}
                        {/*<p className="text-sm">Điện thoại: 0123-456-789</p>*/}
                        {/*<p className="text-sm">Địa chỉ: 123 Đường Sức Khỏe, TP. Hồ Chí Minh</p>*/}
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t  text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Hỗ trợ Cai Thuốc Lá. Bản quyền thuộc về chúng tôi.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;