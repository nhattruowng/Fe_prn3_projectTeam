import {FaEnvelope, FaMapMarkerAlt, FaUser} from "react-icons/fa";
import {useEffect, useMemo, useState} from "react";
import BadgeTimeline from "./BadgeTimeline.tsx";
import DailyStatsChart from "./DailyStatsChart.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";
import {useNavigate} from "react-router-dom";
import {useGetBlogAuthor} from "../hooks/BlogHooks.ts";
import type {GetBlogRespont} from "../modole/respont/BlogRespont.ts";
import {useInfiniteScroll} from "../hooks/useInfiniteScroll.ts";
import {clearUser} from "../store/userSlice.ts.ts";
import type {GetBlogAuthor} from "../modole/request/BlogFillterRequet.ts";
import {IoMdAdd} from "react-icons/io";
import QuitPlanTabs from "../pages/QuitPlanTabs.tsx";
import {TweetCard} from "./TweetCard.tsx";
import DialogCreateBlog from "./DialogCreateBlog.tsx";
import {useGetProgessLog} from "../hooks/ProgressLogsHooks.ts";
import type {FillterProgressLogsRequest} from "../modole/request/ProgressLogsRequet.ts";


export default function UserProfileCard() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<string>("Quá Trình");
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.user);
    const [list, setList] = useState<GetBlogRespont[]>([]);
    const [open, setOpen] = useState(false);
    const {run, data, loading} = useGetBlogAuthor();
    const [ss, setSs] = useState<number>(0);
    const [pending, setPending] = useState<number>(0);
    const [f, setF] = useState<number>(0);

    const {
        run: fetchLogs,
        data: logsData,
    } = useGetProgessLog();
    const [page, setPage] = useState<number>(1);

    const handleLoadingList = async () => {
        const filter: FillterProgressLogsRequest = {
            QuitPlanName: null,
            PageNumber: page,
            PageSize: 30,
        };
        await fetchLogs(filter, user?.accessToken ?? "");
    }

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
        const handle = async () => {
            await handleLoadingList();
        }
        handle();
    }, [user]);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

    useEffect(() => {
        let ss = 0, f = 0, pending = 0;

        logsData?.items.forEach((value) => {
            switch (value.status) {
                case "Completed":
                    ss++;
                    break;
                case "Failed":
                    f++;
                    break;
                case "Pending":
                    pending++;
                    break;
            }
        });
        setSs(ss);
        setF(f);
        setPending(pending);

    }, [logsData]);


    return (
        <div className="bg-white rounded-2xl p-6 text-black shadow-lg w-full max-w-6xl mx-auto relative">

            <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex flex-col justify-between space-y-4 flex-1">
                    <div className="flex items-center gap-2">
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
                    <p className="text-green-600 font-bold">{ss}</p>
                    <p className="text-gray-500 text-sm">Success</p>
                </div>
                <div className="border border-gray-200 rounded-xl p-4">
                    <p className="text-red-500 font-bold">{f}</p>
                    <p className="text-gray-500 text-sm">Failed</p>
                </div>
                <div className="border border-gray-200 rounded-xl p-4">
                    <p className="text-green-600 font-bold">{pending}</p>
                    <p className="text-gray-500 text-sm">Pending</p>
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
                        <div className="pr-2">
                            <div className="space-y-4 px-2 sm:px-4">
                                <button
                                    onClick={() => setOpen(true)}
                                    className="flex items-center gap-2 px-4 py-2 bg-green-200 hover:bg-green-400 text-black rounded-xl transition"
                                >
                                    <IoMdAdd className="text-xl"/>
                                    Thêm bài viết
                                </button>

                                {list.map((item) => (
                                    <TweetCard key={item.id} tweet={item}/>
                                ))}
                            </div>
                        </div>
                    </div>

                )}

                {activeTab === "Quá Trình" && <QuitPlanTabs/>}
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
            <DialogCreateBlog isOpen={open} onClose={() => setOpen(false)}/>
        </div>
    );
}
