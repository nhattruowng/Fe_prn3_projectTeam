import { Heart, MessageCircle } from "lucide-react";
import { useState } from "react";
import CommentDialog from "./CommentScreen.tsx";
import type { GetBlogRespont } from "../modole/respont/BlogRespont.ts";

export const TweetCard = ({ tweet }: { tweet: GetBlogRespont }) => {
    const [showComment, setShowComment] = useState<boolean>(false);

    const formattedDate = new Date(tweet.publishedDate).toLocaleDateString("vi-VN");

    return (
        <>
            <div
                onClick={() => setShowComment(true)}
                className="border border-gray-200 rounded-2xl shadow-md p-5 mb-6 bg-white hover:shadow-lg transition cursor-pointer"
            >
                {/* Tiêu đề và trạng thái */}
                <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                    <h2 className="text-lg font-semibold text-blue-700">{tweet.title}</h2>
                    <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                            tweet.status === "Pending_Approval"
                                ? "bg-yellow-100 text-yellow-700"
                                : tweet.status === "Published"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-gray-200 text-gray-600"
                        }`}
                    >
            {tweet.status.replace("_", " ")}
          </span>
                </div>

                {/* Tác giả và ngày */}
                <div className="text-sm text-gray-500 mb-2">
                    ✍️ {tweet.authorName} • {formattedDate}
                </div>

                {/* Nội dung */}
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {tweet.content}
                </p>

                {/* Ảnh đại diện */}
                {tweet.featuredImageUrl && (
                    <div className="rounded-xl overflow-hidden mb-4">
                        <img
                            src={tweet.featuredImageUrl}
                            alt={tweet.title}
                            className="w-full h-64 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                )}

                {/* Thống kê */}
                <div className="flex items-center gap-6 text-sm text-gray-600">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowComment(true);
                        }}
                        className="flex items-center gap-2 hover:text-blue-500"
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span>{tweet.commentsCount}</span>
                    </button>

                    <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5" />
                        <span>{tweet.views} lượt xem</span>
                    </div>
                </div>
            </div>

            {showComment && (
                <CommentDialog
                    onClose={() => setShowComment(false)}
                    GetBlogRespont={tweet.id}
                />
            )}
        </>
    );
};
