import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";
import {
    useCompleteProgessLog, useFailedProgessLog,
    useGetProgessLog,
    useUpdateProgressLog,
} from "../hooks/ProgressLogsHooks.ts";
import type {
    FillterProgressLogsRequest,
    inforProgressLogsRequest,
} from "../modole/request/ProgressLogsRequet.ts";
import {FiEdit3} from "react-icons/fi";
import type {ProgressLogs} from "../modole/respont/ProgressLogsRespont.tsx";

const QuitPlanLogList: React.FC = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const [page] = useState<number>(1);
    const [editId, setEditId] = useState<string | null>(null);
    const [editForm, setEditForm] = useState({smokedToday: 0, note: ""});

    const {
        run: fetchLogs,
        loading: loadingLogs,
        data: logsData,
    } = useGetProgessLog();

    const {
        run: updateLog,
        loading: updating,
    } = useUpdateProgressLog();


    const {
        run: runCompleteProgessLog,
        // loading: loadingCompleteProgessLog
    } = useCompleteProgessLog();

    const {
        run: runFailedProgessLog,
        // loading: loadingFailedProgessLog
    } = useFailedProgessLog();

    const handleLoadingList = async () => {
        const filter: FillterProgressLogsRequest = {
            QuitPlanName: null,
            PageNumber: page,
            PageSize: 30,
        };
        await fetchLogs(filter, user?.accessToken ?? "");
    }

    useEffect(() => {
        if (user?.accessToken) {
            const filter: FillterProgressLogsRequest = {
                QuitPlanName: null,
                PageNumber: page,
                PageSize: 30,
            };
            fetchLogs(filter, user.accessToken);
        }
    }, [user?.accessToken]);

    const formatDate = (str: string) => {
        const [d, m, y] = str.split(" ")[0].split("-");
        return `${d}/${m}/${y}`;
    };

    const isToday = (str: string) => {
        const [d, m, y] = str.split(" ")[0].split("-");
        const logDate = new Date(`${y}-${m}-${d}`);
        const today = new Date();
        return (
            logDate.getDate() === today.getDate() &&
            logDate.getMonth() === today.getMonth() &&
            logDate.getFullYear() === today.getFullYear()
        );
    };

    const handleEdit = (log: ProgressLogs) => {
        setEditId(log.id);
        setEditForm({
            smokedToday: log.smokedToday,
            note: log.note || "",
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setEditForm((prev) => ({...prev, [name]: value}));
    };

    const handleSave = async (id: string) => {
        const req: inforProgressLogsRequest = {
            note: editForm.note,
            smokedToday: editForm.smokedToday,
        };
        await updateLog(id, req, user?.accessToken ?? "");
        setEditId(null);
        await handleLoadingList();
    };


    const handleUpdateStatusCompale = async (id: string) => {
        await runCompleteProgessLog(id, user?.accessToken ?? "");
        await handleLoadingList();
    }


    const handleFaile = async (id: string) => {
        await runFailedProgessLog(id, user?.accessToken ?? "");
        await handleLoadingList();
    }

    return (
        <div className="max-w-6xl mx-auto mt-6 w-full">
            <h2 className="text-2xl font-bold text-center mb-4">
                Lịch sử ghi nhận cai thuốc
            </h2>

            {loadingLogs ? (
                <div className="text-center text-blue-600 py-10">Đang tải...</div>
            ) : (
                <div className="bg-white rounded-xl shadow overflow-x-auto">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-gray-100 text-gray-800 font-semibold">
                        <tr>
                            <th className="px-4 py-3">Ngày</th>
                            <th className="px-4 py-3">Kế hoạch</th>
                            <th className="px-4 py-3">Điếu hút</th>
                            <th className="px-4 py-3">Ghi chú</th>
                            <th className="px-4 py-3">Tư vấn HLV</th>
                            <th className="px-4 py-3">Trạng thái</th>
                            <th className="px-4 py-3">Hành động</th>
                        </tr>
                        </thead>
                        <tbody>
                        {logsData?.items.map((log) => {
                            const today = isToday(log.logDate);
                            const isEditing = log.id === editId;

                            return (
                                <tr key={log.id} className="border-t hover:bg-gray-50">
                                    <td className="px-4 py-2">{formatDate(log.logDate)}</td>
                                    <td className="px-4 py-2">{log.quitPlanName}</td>
                                    <td className="px-4 py-2">
                                        {isEditing ? (
                                            <input
                                                type="number"
                                                name="smokedToday"
                                                value={editForm.smokedToday}
                                                onChange={handleChange}
                                                className="border px-2 py-1 rounded w-20"
                                            />
                                        ) : (
                                            log.smokedToday
                                        )}
                                    </td>
                                    <td className="px-4 py-2 text-gray-600">
                                        {isEditing ? (
                                            <input
                                                name="note"
                                                value={editForm.note}
                                                onChange={handleChange}
                                                className="border px-2 py-1 rounded w-full"
                                            />
                                        ) : (
                                            log.note || "-"
                                        )}
                                    </td>
                                    <td className="px-4 py-2 text-gray-600">
                                        {log.coachAdvice || "-"}
                                    </td>
                                    <td className="px-4 py-2">
                                          <span
                                              className={`px-3 py-1 rounded-xl text-sm font-medium
                                              ${
                                                  log.status === "Pending"
                                                      ? "bg-yellow-100 text-yellow-800"
                                                      : log.status === "Completed"
                                                          ? "bg-green-100 text-green-800"
                                                          : log.status === "Failed"
                                                              ? "bg-red-100 text-red-800"
                                                              : "text-gray-400"
                                              }
                                            `}
                                          >
                                            {log.status || "-"}
                                          </span>
                                    </td>
                                    <td className="px-4 py-2">
                                        {today && log.status === "Pending" && (
                                            <div className="flex gap-2 flex-wrap">
                                                {isEditing ? (
                                                    <>
                                                        <button
                                                            onClick={() => handleSave(log.id)}
                                                            disabled={updating}
                                                            className="bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600 flex items-center"
                                                        >
                                                            {updating && (
                                                                <svg
                                                                    className="w-4 h-4 animate-spin mr-1"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <circle
                                                                        className="opacity-25"
                                                                        cx="12"
                                                                        cy="12"
                                                                        r="10"
                                                                        stroke="currentColor"
                                                                        strokeWidth="4"
                                                                    ></circle>
                                                                    <path
                                                                        className="opacity-75"
                                                                        fill="currentColor"
                                                                        d="M4 12a8 8 0 018-8v8H4z"
                                                                    ></path>
                                                                </svg>
                                                            )}
                                                            Xác nhận
                                                        </button>
                                                        <button
                                                            onClick={() => setEditId(null)}
                                                            className="bg-gray-400 text-white text-xs px-3 py-1 rounded hover:bg-gray-500"
                                                        >
                                                            Huỷ
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button
                                                            onClick={() => handleEdit(log)}
                                                            className="bg-orange-500 text-white p-1 rounded hover:bg-orange-600"
                                                        >
                                                            <FiEdit3 size={16}/>
                                                        </button>
                                                        <button
                                                            onClick={() => handleUpdateStatusCompale(log.id)}
                                                            className="bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600"
                                                        >
                                                            Thành công
                                                        </button>
                                                        <button
                                                            onClick={() => handleFaile(log.id)}
                                                            className="bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600"
                                                        >
                                                            Thất bại
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default QuitPlanLogList;
