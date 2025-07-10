import React, { useEffect } from "react";
import { useGetAllQuitPlans } from "../hooks/QuitPlanHooks";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import type { QuitPlanRequet } from "../modole/request/QuitPlanRequest";

const Calendar: React.FC = () => {
    const token = useSelector((state: RootState) => state.user.user?.accessToken) ?? "";
    const { run: runGetAllQuitPlans, data: getAllQuitPlans } = useGetAllQuitPlans();

    useEffect(() => {
        const fetchData = async () => {
            const request: QuitPlanRequet = {};
            await runGetAllQuitPlans(request, token);
        };
        fetchData();
    }, [token]);

    return (
        <div className="max-w-5xl mx-auto px-6 py-10">
            <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
                📅 Kế hoạch bỏ thuốc của bạn
            </h1>

            <div className="space-y-6">
                {getAllQuitPlans?.items?.map((plan) => {
                    const start = new Date(plan.startDate).toLocaleDateString("vi-VN");
                    const end = new Date(plan.targetDate).toLocaleDateString("vi-VN");

                    return (
                        <div
                            key={plan.id}
                            className="bg-white rounded-xl border shadow p-5 space-y-3"
                        >
                            {/* Header: Lý do + trạng thái */}
                            <div className="flex justify-between items-start">
                                <h2 className="text-lg font-semibold text-blue-700 flex items-center gap-2">
                                    🟢 {plan.reason}
                                </h2>
                                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                  {plan.status}
                </span>
                            </div>

                            {/* Nội dung */}
                            <ul className="text-sm text-gray-800 space-y-1 pl-1">
                                <li>📅 <strong>Bắt đầu:</strong> {start}</li>
                                <li>🏁 <strong>Kết thúc:</strong> {end}</li>
                                <li>🦷 <strong>Trước khi cai:</strong> {plan.cigarettesPerDayBeforeQuit} điếu/ngày</li>
                                <li>👴 <strong>Số năm hút:</strong> {plan.yearsSmokingBeforeQuit} năm</li>
                                <li>🌿 <strong>Ngày không hút:</strong> {plan.smokeFreeDays} ngày</li>
                            </ul>

                            {/* Tác động sức khỏe */}
                            <div>
                                <p className="font-semibold text-gray-900 text-sm mb-1">🩺 Tác động sức khoẻ:</p>
                                <ul className="text-sm text-gray-700 pl-5 list-disc">
                                    <li>Nguy cơ ung thư giảm: {plan.healthImpact.cancerRiskReductionPercent}%</li>
                                    <li>Nguy cơ tim mạch giảm: {plan.healthImpact.heartRiskReductionPercent}%</li>
                                    <li>{plan.healthImpact.summary}</li>
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Calendar;
