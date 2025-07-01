import React, {useState} from "react";
import {FcGoogle} from "react-icons/fc";
import {Link, useNavigate} from "react-router-dom";
import {useRegister} from "../hooks/AuthenticationHooks.ts";

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const {mutate, isPending} = useRegister();

    const handleRegis = () => {
        if (password !== confirmPassword) {
            setMessage("Mật khẩu không khớp");
            return;
        }


        mutate({email: email, password: password}, {
            onSuccess: () => {
                setTimeout(() => navigate("/login"), 1500);
            },
            onError: () => {
                setMessage("Lỗi không mong muốn");
                alert("lỖI KHÔNG MONG MUỐN!" + "kIỂM TRA LẠI EMAIL HOẶT PASSWORD")
                setPassword("");
                setConfirmPassword("");
            }
        })
    }

    return (
        <div className="flex flex-col justify-center items-center bg-white h-screen">
            <div className="mx-auto w-full flex flex-col justify-center px-5 md:max-w-[50%] lg:max-w-[50%]">
                <Link className="mt-10 w-fit text-black" to="/login">
                    <div className="flex items-center">
                        <svg viewBox="0 0 320 512" className="mr-3 h-[13px] w-[8px] text-black"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                        </svg>
                        <p className="text-sm">Quay lại trang đăng nhập</p>
                    </div>
                </Link>

                <div className="my-auto mt-8 flex flex-col w-[350px] max-w-[450px] mx-auto md:mt-[70px] lg:mt-[130px]">
                    <p className="text-[32px] font-bold text-black">Tạo tài khoản</p>

                    <input type="hidden" name="provider" value="google"/>
                    <button
                        type="button"
                        className="inline-flex items-center justify-center w-full h-10 px-4 py-6 text-sm font-medium border rounded-md text-black border-zinc-300 hover:bg-zinc-100"
                    >
                        <FcGoogle className="mr-2 h-5 w-5"/>
                        Tiếp tục với Google
                    </button>

                    <div className="relative my-4">
                        <div className="flex items-center py-1 space-x-4">
                            <div className="grow border-t border-zinc-200"/>
                            <div className="grow border-t border-zinc-200"/>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <div>
                            <label htmlFor="email" className="text-black">Email</label>
                            <input
                                onChange={event => setEmail(event.target.value)}
                                id="email"
                                name="email"
                                type="email"
                                placeholder="name@example.com"
                                autoComplete="email"
                                className="mt-1 mb-2 w-full min-h-[44px] rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm font-medium text-black placeholder:text-zinc-400 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-black">Mật khẩu</label>
                            <input
                                onChange={event => setPassword(event.target.value)}
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                autoComplete="new-password"
                                className="mt-1 mb-2 w-full min-h-[44px] rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm font-medium text-black placeholder:text-zinc-400 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="text-black">Xác nhận mật khẩu</label>
                            <input
                                onChange={event => setConfirmPassword(event.target.value)}
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                className="mt-1 mb-2 w-full min-h-[44px] rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm font-medium text-black placeholder:text-zinc-400 focus:outline-none"
                            />
                        </div>
                        {message && <p className="text-red-500 text-sm">{message}</p>}
                        <button
                            disabled={isPending}
                            type="button"
                            onClick={handleRegis}
                            className="mt-2 flex items-center justify-center w-full rounded-lg bg-black text-white hover:bg-zinc-800 px-4 py-4 text-sm font-medium"
                        >
                            {isPending ? "xác thực ..." : "Tạo tài khoản"}

                        </button>
                    </div>

                    <p className="text-sm text-zinc-700">
                        Bạn đã có tài khoản?{" "}
                        <Link to="/login" className="font-medium text-black underline">Đăng nhập</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;