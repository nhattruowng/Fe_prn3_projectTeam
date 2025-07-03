import {FaEnvelope, FaMapMarkerAlt, FaUser} from "react-icons/fa";
import {useEffect, useMemo, useState} from "react";
import Calendar from "../pages/Calendar.tsx";
import BadgeTimeline from "./BadgeTimeline.tsx";
import DailyStatsChart from "./DailyStatsChart.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";
import {useNavigate} from "react-router-dom";
import {useGetBlogAuthor} from "../hooks/BlogHooks.ts";
import {TweetCard} from "./TweetCard.tsx";
import type {GetBlogRespont} from "../modole/respont/BlogRespont.ts";
import {useInfiniteScroll} from "../hooks/useInfiniteScroll.ts";
import {clearUser} from "../store/userSlice.ts.ts";
import type {GetBlogAuthor} from "../modole/request/BlogFillterRequet.ts";

export default function UserProfileCard() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<string>("Quá Trình");
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.user);
    const [list, setList] = useState<GetBlogRespont[]>([]);

    const {run, data, loading} = useGetBlogAuthor();

    const [page, setPage] = useState<number>(1)

    const fillter = useMemo<GetBlogAuthor>(() => ({
        token: user?.accessToken ?? "",
        authorId: "",
        PageNumber: page,
        PageSize: 20
    }), [page, user?.accessToken]);

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user]);

    const {observerRef} = useInfiniteScroll({
        loading,
        onLoadMore: () => setPage(prev => prev + 1),
    });

    useEffect(() => {
        if (activeTab === "Bài Viết") {
            run(fillter);
        }
    }, [activeTab, fillter]);


    useEffect(() => {
        if (data?.items && activeTab === "Bài Viết") {
            setList(prev => {
                const ids = new Set(prev.map(item => item.id));
                const newItems = data.items.filter(item => !ids.has(item.id));
                return [...prev, ...newItems];
            });
        }
    }, [data?.items, activeTab]);


    const handleLogout = () => {
        const confirmed = window.confirm("Bạn có chắc chắn muốn đăng xuất không?");
        if (confirmed) {
            dispatch(clearUser());
        }
    }


    return (
        <div className="bg-white rounded-2xl p-6 text-black shadow-lg w-full max-w-6xl mx-auto relative">

            <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex flex-col justify-between space-y-4 flex-1">
                    <div className="flex items-center gap-2">
                        <button className="bg-green-200 hover:bg-green-400 px-4 py-1 rounded-lg">Sửa</button>
                        <button onClick={handleLogout}
                                className="bg-gray-200 hover:bg-gray-400 px-4 py-1 rounded-lg">Đăng xuất
                        </button>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 text-xl font-bold">
                            {user?.fullName} <FaUser className="text-blue-500"/>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <FaEnvelope/> <span>{user?.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <FaMapMarkerAlt/> <span>{user?.gender}</span>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="font-semibold">50%</span>
                            <span className="text-gray-400">Profile Completion</span>
                        </div>
                        <div className="w-full h-2 bg-gray-300 rounded-full mt-1">
                            <div className="h-full bg-green-500 rounded-full w-[50%]"/>
                        </div>
                    </div>
                </div>

                <div className="flex-shrink-0 relative">
                    <img
                        src={user?.userImage}
                        className="w-24 h-24 rounded-xl object-cover"
                        alt="avatar"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-center">
                <div className="border border-gray-200 rounded-xl p-4">
                    <p className="text-green-600 font-bold">%60</p>
                    <p className="text-gray-500 text-sm">Success Rate</p>
                </div>
                <div className="border border-gray-200 rounded-xl p-4">
                    <p className="text-red-500 font-bold">80</p>
                    <p className="text-gray-500 text-sm">Projects</p>
                </div>
                <div className="border border-gray-200 rounded-xl p-4">
                    <p className="text-green-600 font-bold">$4,500</p>
                    <p className="text-gray-500 text-sm">Earnings</p>
                </div>
            </div>
            <div className="mt-6 flex flex-wrap justify-between border-b border-gray-300 text-sm">
                {["Quá Trình", "Bài Viết", "Thông tin"].map((tab) => (
                    <div
                        onClick={() => setActiveTab(tab)}
                        key={tab}
                        className={`px-4 pb-3.5 cursor-pointer transition-all duration-200 ${
                            activeTab === tab
                                ? "text-blue-600 border-b-2 border-blue-600 font-medium"
                                : "text-gray-500 hover:text-black"
                        }`}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            <div className="mt-4">
                {activeTab === "Bài Viết" && (
                    <div className="mt-4">
                        <div className="max-h-[500px] overflow-y-auto pr-2">
                            <div
                                className="space-y-4 px-2 sm:px-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                                {list.map((tweet) => (
                                    <TweetCard key={tweet.id} tweet={tweet}/>
                                ))}
                                {loading && (
                                    <div className="text-center text-gray-500 py-4">Đang tải...</div>
                                )}
                                <div ref={observerRef} className="h-10"></div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Quá Trình" && <Calendar/>}
                {activeTab === "Thông tin" && (
                    <div className="space-y-10 px-4 md:px-8 py-6 bg-white rounded-xl shadow-sm">
                        <div className="mb-4">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-1">🔍 Thông tin tổng quan</h2>
                            <p className="text-sm text-gray-500">Theo dõi huy hiệu đạt được và thống kê theo ngày</p>
                        </div>

                        <BadgeTimeline/>

                        <DailyStatsChart/>
                    </div>
                )}
            </div>
        </div>
    );
}
