import React, {useEffect, useState} from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import {UserDashboardHooks} from "../hooks/UserDashboardHooks.ts";
import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";

const months = [
    {label: "Tháng 1", value: "01"},
    {label: "Tháng 2", value: "02"},
    {label: "Tháng 3", value: "03"},
    {label: "Tháng 4", value: "04"},
    {label: "Tháng 5", value: "05"},
    {label: "Tháng 6", value: "06"},
    {label: "Tháng 7", value: "07"},
    {label: "Tháng 8", value: "08"},
    {label: "Tháng 9", value: "09"},
    {label: "Tháng 10", value: "10"},
    {label: "Tháng 11", value: "11"},
    {label: "Tháng 12", value: "12"},
];

const DailyStatsChart = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const token = user?.accessToken ?? "";
    const userId = user?.id ?? "";

    const currentDate = new Date();
    const defaultMonth = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}`;

    const [selectedMonth, setSelectedMonth] = useState(defaultMonth);
    const {run: fetchData, data} = UserDashboardHooks();

    useEffect(() => {
        if (userId && selectedMonth) {
            fetchData(userId, selectedMonth, token);
        }
    }, [selectedMonth, userId]);

    const chartData = data?.data?.dailyCountsThisMonth.map(item => ({
        day: new Date(item.date).getDate(),
        value: item.cigarettesSmoked,
    })) ?? [];

    const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const monthValue = e.target.value;
        const year = currentDate.getFullYear();
        setSelectedMonth(`${year}-${monthValue}`);
    };

    const selectedMonthLabel = months.find(m => m.value === selectedMonth.split("-")[1])?.label ?? "";

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md text-black max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-xl font-semibold">📊 Biểu đồ số điếu thuốc đã hút</h2>
                    <p className="text-sm text-gray-600">Trong {selectedMonthLabel} {currentDate.getFullYear()}</p>
                </div>

                <select
                    className="bg-gray-100 text-black border border-gray-300 rounded px-3 py-1 text-sm"
                    onChange={handleMonthChange}
                    value={selectedMonth.split("-")[1]}
                >
                    {months.map((month) => (
                        <option key={month.value} value={month.value}>
                            {month.label}
                        </option>
                    ))}
                </select>
            </div>

            <ResponsiveContainer width="100%" height={320}>
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
                    <XAxis dataKey="day" stroke="#888"/>
                    <YAxis stroke="#888"/>
                    <Tooltip
                        contentStyle={{backgroundColor: "#fff", border: "1px solid #ddd", color: "#000"}}
                        formatter={(value: number) => [`${value} điếu`, "Số lượng"]}
                        labelFormatter={(label) => `Ngày ${label}`}
                    />
                    <Bar dataKey="value" fill="#3b82f6" radius={[6, 6, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DailyStatsChart;
