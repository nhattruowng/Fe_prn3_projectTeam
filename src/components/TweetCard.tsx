import {Heart, MessageCircle} from "lucide-react";
import {useState} from "react";
import CommentDialog from "./CommentScreen.tsx";
import type {GetBlogRespont} from "../modole/respont/BlogRespont.ts";

export const TweetCard = ({tweet}: { tweet: GetBlogRespont }) => {
    const [showComment, setShowComment] = useState<boolean>(false);

    return (
        <>
            <div
                onClick={() => setShowComment(true)}
                className="border border-gray-700 rounded-xl p-4 mb-4 bg-white text-white transition-colors duration-300 hover:bg-gray-400">
                <div className="flex gap-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-bold text-black">{tweet.authorName}</h3>
                        </div>

                        <p className="mt-2 leading-relaxed text-black">
                            {tweet.content.split(" ").map((word, i) =>
                                word.startsWith("#") ? (
                                    <span key={i} className="text-blue-400 hover:underline mr-1 inline-block">
                                        {word}
                                    </span>
                                ) : (
                                    <span key={i}>{word} </span>
                                )
                            )}
                        </p>

                        <div className="mt-3 rounded-xl overflow-hidden">
                            <img
                                src={tweet.featuredImageUrl}
                                alt="Tweet visual"
                                className="w-full h-64 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                            />
                        </div>

                        <div className="flex items-center gap-6 mt-4">
                            <button
                                onClick={() => setShowComment(true)}
                                className="flex items-center gap-2 text-black hover:text-blue-400 hover:bg-blue-900 p-2 rounded-full transition duration-200 group"
                            >
                                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform"/>
                                <span className="text-sm">{tweet.commentsCount}</span>
                            </button>

                            <div
                                className="flex items-center gap-2 text-black p-2 rounded-full transition duration-200 group"
                            >
                                <Heart className="w-5 h-5 transition-transform"/>
                                <div className="text-sm">{tweet.views}</div>
                            </div>
                        </div>
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
