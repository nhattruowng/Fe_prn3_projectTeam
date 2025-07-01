import React from 'react';

interface Event {
    time: string;
    confirmed: boolean;
}

interface CalendarDay {
    date: number;
    description: string;
    events: Event[];
}

const Calendar: React.FC = () => {
    const daysInSeptember: CalendarDay[] = Array.from({length: 30}, (_, i) => ({
        date: i + 1,
        description: "Ngay 6 dieu thuoc",
        events: [
            {time: 'Đợi', confirmed: false},
            {time: 'Không', confirmed: true},
        ],
    }));

    const daysOfWeek = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'];
    const firstDayOfMonth = new Date(2025, 6, 1).getDay();
    const offset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-200">
            <div className="grid grid-cols-7 gap-2 mb-4">
                {daysOfWeek.map((day) => (
                    <div
                        key={day}
                        className="text-center font-semibold text-gray-600 py-2 bg-gray-100 rounded-lg shadow-sm"
                    >
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
                {Array.from({length: offset}).map((_, index) => (
                    <div
                        key={`empty-${index}`}
                        className="p-4 bg-transparent rounded-lg"
                    />
                ))}

                {daysInSeptember.map((day) => (
                    <div
                        key={day.date}
                        className="p-4 bg-white border rounded-xl shadow hover:shadow-md transition-all space-y-3"
                    >
                        <div className="flex items-center justify-between">
                            <div className="font-bold text-gray-800 text-lg">{day.date}</div>
                        </div>
                        {day.description && (
                            <div className="text-sm text-gray-500">{day.description}</div>
                        )}

                        <div className="space-y-3">
                            {day.events.map((event, index) => (
                                <div
                                    key={index}
                                    className={`rounded-xl shadow-sm border px-4 py-3 flex items-start justify-between gap-3 ${
                                        event.confirmed
                                            ? 'bg-green-50 text-green-800 border-green-200'
                                            : 'bg-yellow-50 text-yellow-800 border-yellow-200'
                                    }`}
                                >
                                    <label className="flex items-start gap-3 cursor-pointer w-full">
                                        <input
                                            type="radio"
                                            name={`event-${day.date}`}
                                            className="mt-1 accent-blue-500"
                                        />
                                        <div className="leading-tight">
                                            <div className="font-semibold">{event.time}</div>
                                        </div>
                                    </label>
                                </div>
                            ))}

                            <input
                                type="number"
                                placeholder="Số lượng"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Calendar;
