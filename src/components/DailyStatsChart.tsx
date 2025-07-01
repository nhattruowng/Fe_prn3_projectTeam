import React, {useState} from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const generateData = (days: number) => {
    return Array.from({length: days}, (_, i) => ({
        day: `${i + 1}`,
        value: Math.floor(Math.random() * 100) + 20,
    }));
};

const months = [
    {label: "Tháng 1", days: 31},
    {label: "Tháng 2", days: 28},
    {label: "Tháng 3", days: 31},
    {label: "Tháng 4", days: 30},
    {label: "Tháng 5", days: 31},
    {label: "Tháng 6", days: 30},
    {label: "Tháng 7", days: 31},
    {label: "Tháng 8", days: 31},
    {label: "Tháng 9", days: 30},
    {label: "Tháng 10", days: 31},
    {label: "Tháng 11", days: 30},
    {label: "Tháng 12", days: 31},
];

const DailyStatsChart = () => {
    const [selectedMonth, setSelectedMonth] = useState(months[6]);
    const [data, setData] = useState(generateData(selectedMonth.days));

    const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const month = months[+e.target.value];
        setSelectedMonth(month);
        setData(generateData(month.days));
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md text-black max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-xl font-semibold">📊 Biểu đồ theo ngày</h2>
                    <p className="text-sm text-black">Thống kê số lượng mỗi ngày trong {selectedMonth.label}</p>
                </div>

                <select
                    className="bg-gray-200 text-black border border-gray-600 rounded px-3 py-1 text-sm"
                    onChange={handleMonthChange}
                    defaultValue="6"
                >
                    {months.map((month, index) => (
                        <option key={index} value={index}>
                            {month.label}
                        </option>
                    ))}
                </select>
            </div>

            <ResponsiveContainer width="100%" height={320}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333"/>
                    <XAxis dataKey="day" stroke="#ccc"/>
                    <YAxis stroke="#ccc"/>
                    <Tooltip contentStyle={{backgroundColor: "#1f1f24", border: "none"}}/>
                    <Bar dataKey="value" fill="#3b82f6" radius={[6, 6, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DailyStatsChart;
