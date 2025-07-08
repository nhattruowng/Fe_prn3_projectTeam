import React, {useState} from "react";
import Calendar from "./Calendar.tsx";
import QuitPlanLogList from "../components/QuitPlanList.tsx";

const QuitPlanTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"list" | "calendar">("list");

    return (
        <div className="max-w-6xl mx-auto p-4">
            {/* Tabs */}
            <div className="flex gap-4 border-b pb-2 mb-4">
                <button
                    onClick={() => setActiveTab("list")}
                    className={`px-4 py-2 font-semibold ${
                        activeTab === "list"
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "text-gray-500"
                    }`}
                >
                    Quá trình
                </button>
                <button
                    onClick={() => setActiveTab("calendar")}
                    className={`px-4 py-2 font-semibold ${
                        activeTab === "calendar"
                            ? "border-b-2 border-blue-500 text-blue-600"
                            : "text-gray-500"
                    }`}
                >
                    Kế hoạch
                </button>
            </div>

            <div>
                {activeTab === "list" && <QuitPlanLogList/>}
                {activeTab === "calendar" && <Calendar/>}
            </div>
        </div>
    );
};

export default QuitPlanTabs;
