import {useState} from "react";
import {useCreateNewUserPackage} from "../hooks/UsePackageHooks.ts";
import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";

type Props = {
    open?: boolean;
    onClose?: () => void;
    id: string;
};

export const FormInputs: React.FC<Props> = ({open = false, onClose, id}) => {
    const user = useSelector((state: RootState) => state.user.user);
    const [confirmed, setConfirmed] = useState(false);
    const [block, setBlock] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        reason: "",
        frequency: "",
        years: "",
    });
    const [message, setMessage] = useState("");

    const {run, loading, data} = useCreateNewUserPackage();

    const handleConfirm = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        if (isChecked && !block) {
            setMessage(""); // reset thông báo
            await run(id, user?.accessToken ?? "");

            if (data != null) {
                setConfirmed(true);
                setBlock(true);
                setMessage("Xác nhận thành công!");
            } else {
                setConfirmed(false);
                setMessage("Đăng ký thất bại. Vui lòng thử lại!");
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submit dữ liệu:", formData);
        setMessage("Đăng ký thành công!");
        setTimeout(() => onClose?.(), 1000);
    };

    return (
        <>
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
                        {/* Nút đóng */}
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl"
                        >
                            &times;
                        </button>

                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Xác nhận đăng ký</h2>

                        <div className="flex items-center gap-2 mb-4">
                            <input
                                id="confirm"
                                type="checkbox"
                                checked={confirmed}
                                onChange={handleConfirm}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                disabled={block || loading}
                            />
                            <label htmlFor="confirm" className="text-sm font-medium text-gray-900">
                                Tôi xác nhận muốn đăng ký
                            </label>
                        </div>

                        {message && (
                            <div
                                className={`text-sm mb-4 font-medium ${
                                    confirmed ? "text-green-600" : "text-red-500"
                                }`}
                            >
                                {message}
                            </div>
                        )}

                        {confirmed && (
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
                                        onChange={handleChange}
                                        className="px-3 py-2 rounded-md border border-gray-300 text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="frequency" className="text-sm font-medium text-gray-900 mb-1">
                                        Tần suất hút thuốc của bạn trong ngày?
                                    </label>
                                    <input
                                        id="frequency"
                                        type="number"
                                        min={0}
                                        placeholder="Số lần/ngày"
                                        value={formData.frequency}
                                        onChange={handleChange}
                                        className="px-3 py-2 rounded-md border border-gray-300 text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="years" className="text-sm font-medium text-gray-900 mb-1">
                                        Bạn đã hút bao nhiêu năm?
                                    </label>
                                    <input
                                        id="years"
                                        type="number"
                                        min={0}
                                        placeholder="Số năm"
                                        value={formData.years}
                                        onChange={handleChange}
                                        className="px-3 py-2 rounded-md border border-gray-300 text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full text-white text-sm font-medium px-4 py-2 rounded-md ${
                                        loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                                    }`}
                                >
                                    {loading ? "Đang đăng ký..." : "Đăng ký"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};
