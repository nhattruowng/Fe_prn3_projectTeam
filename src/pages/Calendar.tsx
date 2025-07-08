import React, {useEffect} from "react";
import {useGetAllQuitPlans} from "../hooks/QuitPlanHooks";
import {useSelector} from "react-redux";
import type {RootState} from "../store/store";
import type {QuitPlanRequet} from "../modole/request/QuitPlanRequest";

const Calendar: React.FC = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const token = user?.accessToken ?? "";

    const {run: runGetAllQuitPlans, data: getAllQuitPlans} = useGetAllQuitPlans();

    useEffect(() => {
        const fetchData = async () => {
            const request: QuitPlanRequet = {};
            await runGetAllQuitPlans(request, token);
        };
        fetchData();
    }, [token]);


    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="space-y-6">
                {getAllQuitPlans?.items?.map((plan) => {
                    const start = new Date(plan.startDate).toLocaleDateString("vi-VN");
                    const end = new Date(plan.targetDate).toLocaleDateString("vi-VN");

                    return (
                        <div key={plan.id} className="p-4 border rounded-xl shadow space-y-2 bg-white">
                            <div><strong>🟢 Lý do:</strong> {plan.reason}</div>
                            <div><strong>📅 Bắt đầu:</strong> {start}</div>
                            <div><strong>📅 Kết thúc:</strong> {end}</div>
                            <div><strong>🚬 Trước khi cai:</strong> {plan.cigarettesPerDayBeforeQuit} điếu/ngày</div>
                            <div><strong>🧓 Số năm hút:</strong> {plan.yearsSmokingBeforeQuit} năm</div>
                            <div><strong>📈 Trạng thái:</strong> {plan.status}</div>
                            {/*<div><strong>🔥 Ngày không hút:</strong> {plan.smokeFreeDays}</div>*/}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Calendar;
