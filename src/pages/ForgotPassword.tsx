import React, {useState} from "react";
import {Link} from "react-router-dom";

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [formError, setFormError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const isCodeStep = successMessage === "Success";

    return (
        <div className="flex flex-col justify-center items-center bg-white h-screen">
            <div className="w-full max-w-md px-6 py-8 bg-white border rounded-md shadow-md">
                <h2 className="text-2xl font-bold text-center text-black">Quên mật khẩu</h2>
                <p className="mt-2 text-sm text-center text-zinc-600">
                    {isCodeStep ? "Nhập mã xác nhận và mật khẩu mới" : "Nhập email để nhận mã xác nhận"}
                </p>

                <div className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 w-full rounded-md border border-gray-400 px-4 py-3 text-sm text-black placeholder:text-zinc-400 focus:outline-none"
                            placeholder="example@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isCodeStep}
                            required
                        />
                    </div>

                    {isCodeStep && (
                        <>
                            <div>
                                <label htmlFor="code" className="block text-sm font-medium text-black">Mã xác
                                    nhận</label>
                                <input
                                    type="text"
                                    id="code"
                                    className="mt-1 w-full rounded-md border border-gray-400 px-4 py-3 text-sm text-black placeholder:text-zinc-400 focus:outline-none"
                                    placeholder="Nhập mã 6 số"
                                    maxLength={6}
                                    value={code}
                                    onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-black">Mật khẩu
                                    mới</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="mt-1 w-full rounded-md border border-gray-400 px-4 py-3 text-sm text-black placeholder:text-zinc-400 focus:outline-none"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-black">Xác
                                    nhận mật khẩu</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    className="mt-1 w-full rounded-md border border-gray-400 px-4 py-3 text-sm text-black placeholder:text-zinc-400 focus:outline-none"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </>
                    )}

                    {formError && <p className="text-red-500 text-sm">{formError}</p>}
                    {successMessage && !isCodeStep &&
                        <p className="text-green-600 text-sm">Mã xác nhận đã được gửi!</p>}
                    {successMessage && isCodeStep && <p className="text-green-600 text-sm">{successMessage}</p>}

                    <button
                        type="button"
                        className="w-full bg-black hover:bg-zinc-800 text-white py-3 px-4 rounded-md text-sm font-medium"
                    >
                        {isCodeStep ? "Xác nhận" : "Gửi mã"}
                    </button>
                </div>

                <p className="mt-6 text-sm text-center text-zinc-600">
                    <Link to="/login" className="underline text-black">Quay lại đăng nhập</Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;