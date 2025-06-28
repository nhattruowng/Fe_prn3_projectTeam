
interface BadgeItem {
    time: string;
    imageUrl: string;
    description: string;
    color: string;
}

const badgeList: BadgeItem[] = [
    {
        time: "1 ngày",
        imageUrl: "/badges/1.png",
        description: "Huy hiệu Năng động – Hoàn thành 5 nhiệm vụ/ngày",
        color: "border-yellow-400 bg-yellow-50 text-yellow-800"
    },
    {
        time: "3 ngày",
        imageUrl: "/badges/2.png",
        description: "Huy hiệu Học tập – Học liên tục 3 giờ",
        color: "border-green-400 bg-green-50 text-green-800"
    },
    {
        time: "7 ngày",
        imageUrl: "/badges/3.png",
        description: "Huy hiệu Cống hiến – Góp ý hơn 10 lần",
        color: "border-red-400 bg-red-50 text-red-800"
    },
    {
        time: "30 ngày",
        imageUrl: "/badges/4.png",
        description: "Huy hiệu Khám phá – Trải nghiệm tính năng mới",
        color: "border-blue-400 bg-blue-50 text-blue-800"
    },
    {
        time: "300 ngày",
        imageUrl: "/badges/5.png",
        description: "Huy hiệu Thành tích – Hoàn thành 100% mục tiêu tuần",
        color: "border-purple-400 bg-purple-50 text-purple-800"
    },
];

const BadgeTimeline = () => {
    return (
        <div className="bg-white text-black p-6 rounded-2xl shadow-xl max-w-3xl mx-auto border border-gray-200">
            <h2 className="text-xl font-bold mb-1">🎖 Huy hiệu đạt được</h2>
            <p className="text-gray-500 text-sm mb-6">Theo dõi các cột mốc thành tích nổi bật của bạn</p>

            <div className="relative border-l-[3px] border-gray-200 pl-6 space-y-8">
                {badgeList.map((badge, index) => (
                    <div key={index} className="relative">
                        {/* Mốc thời gian */}
                        <span
                            className={`absolute -left-[11px] top-2 w-4 h-4 rounded-full ring-2 ring-white ${badge.color.split(' ')[0]}`}
                        />

                        {/* Nội dung */}
                        <div className={`flex items-start gap-4 p-4 rounded-xl shadow-sm border ${badge.color}`}>
                            <div className="w-10 h-10 flex-shrink-0">
                                <img
                                    src={badge.imageUrl}
                                    alt="badge"
                                    className="w-full h-full object-cover rounded-full border-2 border-white shadow"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500 font-mono">{badge.time}</span>
                                <p className="text-sm font-medium mt-1">{badge.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BadgeTimeline;
