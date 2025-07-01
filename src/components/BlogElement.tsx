import React from "react";
import { useNavigate} from "react-router-dom";

export const BlogElement: React.FC = () => {

    const navigate = useNavigate();


    return (
        <>
            <span
                onClick={() => navigate("/blogs/blog")}
                className="bg-white rounded-xl shadow-sm p-4 space-y-3 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-gray-100"
            >
                <div className="flex items-center gap-3">
                    <img
                        src="https://placekitten.com/40/40"
                        className="w-10 h-10 rounded-full"
                        alt="avatar"
                    />
                    <div>
                        <p className="font-medium text-sm">John Doe</p>
                        <p className="text-xs text-gray-400">2 giờ trước</p>
                    </div>
                </div>

                <p className="text-sm text-gray-800">
                    Một ngày tuyệt vời với mèo đáng yêu! 🐱{" "}
                    <a href="#" className="text-blue-500 hover:underline">#CuteKitten</a>{" "}
                    <a href="#" className="text-blue-500 hover:underline">#AdventureCat</a>
                </p>

                <img
                    src={`https://placekitten.com/${300 * 10}/${200 * 10}`}
                    alt="Post"
                    className="w-full h-48 object-cover rounded-md"
                />

                <div className="flex justify-between text-sm text-gray-500">
                    <button className="hover:text-red-500">❤️ 42 Likes</button>
                    <button className="hover:text-blue-500">💬 300 Comment</button>
                </div>
            </span>

        </>
    )
}