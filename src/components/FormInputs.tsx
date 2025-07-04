import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";
import {useCreateQuitPlan} from "../hooks/QuitPlanHooks.ts";
import type {QuitPlanRequest} from "../modole/request/QuitPlanRequest.ts";
import {useCreateNewUserPackage, useGetUserPackageCurrent} from "../hooks/UsePackageHooks.ts";

type Props = {
    open?: boolean;
    onClose?: () => void;
    id: string;
};

export const FormInputs: React.FC<Props> = ({open = false, onClose, id}) => {
    const user = useSelector((state: RootState) => state.user.user);
    const token = user?.accessToken ?? "";

    const [confirmed, setConfirmed] = useState(false);
    const [block, setBlock] = useState(false);
    const [message, setMessage] = useState("");

    const [formData, setFormData] = useState<QuitPlanRequest>({
        reason: "",
        cigarettesPerDayBeforeQuit: 0,
        yearsSmokingBeforeQuit: 0,
    });

    const {
        run: runCreateQuitPlan,
        loading: loadingCreateQuitPlan,
        data: dataCreateQuitPlan,
    } = useCreateQuitPlan();

    const {
        run: runCreateNewUserPackage,
        loading: loadingCreateNewUserPackage,
        data: createNewUserPackage,
    } = useCreateNewUserPackage();

    const {
        run: GetUserPackageCurrent,
        data: getUserPackageCurrent,
    } = useGetUserPackageCurrent();

    // ✅ Gọi API lấy gói hiện tại
    useEffect(() => {
        const fetch = async () => {
            if (token) await GetUserPackageCurrent(token);
        };
        fetch();
    }, [token]);

    // ✅ Khi checkbox xác nhận được chọn
    const handleConfirm = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setConfirmed(isChecked);

        if (isChecked && !block) {
            if (getUserPackageCurrent?.data?.isActive) {
                setMessage("Bạn đã có gói hiện tại đang hoạt động.");
                setBlock(true);
                console.log(getUserPackageCurrent)
                return;
            }

            await runCreateNewUserPackage(id, token);
        }
    };

    // ✅ Mở tab thanh toán nếu có đường dẫn
    useEffect(() => {
        if (createNewUserPackage?.message?.startsWith("http")) {
            window.open(createNewUserPackage.message, "_blank");
        }
    }, [createNewUserPackage]);

    // ✅ Submit form kế hoạch
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await runCreateQuitPlan(formData, token);
    };

    // ✅ Xử lý nhập liệu
    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            reason: e.target.value,
        }));
    };

    const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: Number(value),
        }));
    };

    return (
        <>
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl"
                        >
                            &times;
                        </button>

                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Xác nhận đăng ký</h2>

                        <div className="flex items-center gap-2 mb-4">
                            <div className="relative flex items-center">
                                <input
                                    id="confirm"
                                    type="checkbox"
                                    checked={confirmed}
                                    onChange={handleConfirm}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    disabled={block || loadingCreateNewUserPackage}
                                />
                                {loadingCreateNewUserPackage && (
                                    <div className="absolute left-0 top-0 w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                )}
                            </div>
                            <label htmlFor="confirm" className="text-sm font-medium text-gray-900">
                                Tôi xác nhận muốn đăng ký
                            </label>
                        </div>

                        {message && (
                            <div className={`text-sm mb-4 font-medium ${block ? "text-red-500" : "text-green-600"}`}>
                                {message}
                            </div>
                        )}

                        {confirmed && !block && (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="flex flex-col">
                                    <label htmlFor="reason" className="text-sm font-medium text-gray-900 mb-1">
                                        Lý do cai thuốc lá của bạn là gì?
                                    </label>
                                    <input
                                        id="reason"
                                        type="text"
                                        placeholder="Nhập lý do"
                                        value={formData.reason}
                                        onChange={handleChangeText}
                                        className="px-3 py-2 rounded-md border border-gray-300 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="cigarettesPerDayBeforeQuit"
                                           className="text-sm font-medium text-gray-900 mb-1">
                                        Tần suất hút thuốc/ngày?
                                    </label>
                                    <input
                                        id="cigarettesPerDayBeforeQuit"
                                        type="number"
                                        min={0}
                                        value={formData.cigarettesPerDayBeforeQuit}
                                        onChange={handleChangeNumber}
                                        className="px-3 py-2 rounded-md border border-gray-300 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="yearsSmokingBeforeQuit"
                                           className="text-sm font-medium text-gray-900 mb-1">
                                        Bạn đã hút bao nhiêu năm?
                                    </label>
                                    <input
                                        id="yearsSmokingBeforeQuit"
                                        type="number"
                                        min={0}
                                        value={formData.yearsSmokingBeforeQuit}
                                        onChange={handleChangeNumber}
                                        className="px-3 py-2 rounded-md border border-gray-300 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loadingCreateQuitPlan}
                                    className={`w-full text-white text-sm font-medium px-4 py-2 rounded-md ${
                                        loadingCreateQuitPlan
                                            ? "bg-blue-400 cursor-not-allowed"
                                            : "bg-blue-600 hover:bg-blue-700"
                                    }`}
                                >
                                    {loadingCreateQuitPlan ? "Đang đăng ký..." : "Đăng ký"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};
