import type {Tweet} from "../modole/entity/Tweet.ts";
import {Heart, MessageCircle} from "lucide-react";
import {useState} from "react";
import CommentDialog from "./CommentScreen.tsx";

export const TweetCard = ({tweet}: { tweet: Tweet }) => {
    const [showComment, setShowComment] = useState<boolean>(false);
    return (
        <>
            <div
                className="border border-gray-700 rounded-xl p-4 mb-4 bg-white text-white transition-colors duration-300 hover:bg-gray-400">
                <div className="flex gap-4">
                    <img
                        className="h-12 w-12 rounded-full object-cover"
                        src={tweet.author.avatar}
                        alt={tweet.author.name}
                    />
                    <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-bold text-black">{tweet.author.name}</h3>
                            <span className="text-sm text-black">@{tweet.author.username}</span>
                            <span className="text-black">·</span>
                            <span className="text-sm text-black">{tweet.timestamp}</span>
                        </div>

                        {/* Nội dung */}
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

                        {/* Ảnh */}
                        {tweet.image && (
                            <div className="mt-3 rounded-xl overflow-hidden">
                                <img
                                    src={tweet.image}
                                    alt="Tweet visual"
                                    className="w-full h-64 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        )}

                        {/* Hành động */}
                        <div className="flex items-center gap-6 mt-4">
                            <button
                                onClick={() => setShowComment(true)}
                                className="flex items-center gap-2 text-black hover:text-blue-400 hover:bg-blue-900 p-2 rounded-full transition duration-200 group"
                            >
                                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform"/>
                                <span className="text-sm">{tweet.stats.comments}</span>
                            </button>

                            <button
                                className="flex items-center gap-2 text-black    hover:text-red-400 hover:bg-red-900 p-2 rounded-full transition duration-200 group">
                                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform"/>
                                <span className="text-sm">{tweet.stats.likes}</span>
                            </button>
                        </div>
                    </div>
                </div>

                {showComment && <CommentDialog/>}
            </div>


        </>
    );
};
