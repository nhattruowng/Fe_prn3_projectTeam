import {useGetAchivermentHook} from "../hooks/UserAchovermentHooks.ts";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";


const BadgeTimeline = () => {

    const user = useSelector((state: RootState) => state.user.user);

    const {
        run: runGetAchiverment,
        loading: loadingAchiverment,
        data: dataAchiverment
    } = useGetAchivermentHook();


    useEffect(() => {
        const handle = async () => {
            await runGetAchiverment(user?.id ?? "");
        }
        handle();

    }, [user?.accessToken]);

    console.log(dataAchiverment)

    return (
        <div className="bg-white text-black p-6 rounded-2xl shadow-xl max-w-3xl mx-auto border border-gray-200">
            <h2 className="text-xl font-bold mb-1">🎖 Huy hiệu đạt được</h2>
            <p className="text-gray-500 text-sm mb-6">Theo dõi các cột mốc thành tích nổi bật của bạn</p>

            {loadingAchiverment ? (
                <p className="text-gray-500 text-sm">Đang tải huy hiệu...</p>
            ) : Array.isArray(dataAchiverment?.data) && dataAchiverment.data.length > 0 ? (
                <div className="relative border-l-[3px] border-gray-200 pl-6 space-y-8">
                    {dataAchiverment.data.flatMap((entry) =>
                        (entry.achievements ?? []).map((value: any) => (
                            <div key={value.id} className="relative">
                                <span className="absolute -left-[11px] top-2 w-4 h-4 rounded-full ring-2 ring-white"/>
                                <div className="flex items-start gap-4 p-4 rounded-xl shadow-sm border">
                                    <div className="w-10 h-10 flex-shrink-0">
                                        <img
                                            src={value.iconUrl}
                                            alt="badge"
                                            className="w-full h-full object-cover rounded-full border-2 border-white shadow"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500 font-mono">{value.conditionValue}</span>
                                        <p className="text-sm font-medium mt-1">{value.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            ) : (
                <p className="text-gray-500 text-sm">Chưa có huy hiệu nào được ghi nhận.</p>
            )}
        </div>
    );
};

export default BadgeTimeline;
