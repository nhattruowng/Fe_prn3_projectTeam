import type {Tweet} from "../modole/entity/Tweet.ts";
import {Heart, MessageCircle} from "lucide-react";
import {useState} from "react";
import CommentDialog from "./CommentScreen.tsx";

export const TweetCard = ({tweet}: { tweet: Tweet }) => {
    const [showComment, setShowComment] = useState<boolean>(false);
    return (
        <div className="border-b border-gray-300 p-4 hover:bg-gray-100 transition-colors duration-300 animate-fadeIn">
            <div className="flex gap-4">
                {/* Avatar */}
                <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={tweet.author.avatar}
                    alt={tweet.author.name}
                />

                {/* Tweet Content */}
                <div className="flex-1">
                    {/* Header */}
                    <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-gray-900">{tweet.author.name}</h3>
                        <span className="text-sm text-gray-500">@{tweet.author.username}</span>
                        <span className="text-gray-500">·</span>
                        <span className="text-sm text-gray-500">{tweet.timestamp}</span>
                    </div>

                    {/* Content */}
                    <p className="text-gray-800 mt-2 leading-relaxed">
                        {tweet.content.split(' ').map((word, index) =>
                            word.startsWith('#') ? (
                                <span
                                    key={index}
                                    className="text-blue-500 hover:underline inline-block mr-1"
                                >
                                    {word}
                                </span>
                            ) : (
                                <span key={index}>{word} </span>
                            )
                        )}
                    </p>

                    {/* Image */}
                    {tweet.image && (
                        <div className="mt-3 rounded-xl overflow-hidden">
                            <img
                                src={tweet.image}
                                alt="Tweet visual"
                                className="w-full h-64 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex items-center gap-6 mt-4">
                        <button
                            onClick={() => setShowComment(true)}
                            className="flex items-center gap-2 text-gray-500 hover:text-blue-500 hover:bg-blue-100 p-2 rounded-full transition duration-200 group"
                        >
                            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform"/>
                            <span className="text-sm">{tweet.stats.comments}</span>
                        </button>

                        <button
                            className="flex items-center gap-2 text-gray-500 hover:text-red-500 hover:bg-red-100 p-2 rounded-full transition duration-200 group"
                        >
                            <Heart className="w-5 h-5 group-hover:scale-110 transition-transform"/>
                            <span className="text-sm">{tweet.stats.likes}</span>
                        </button>
                    </div>
                </div>
            </div>
            {showComment && <CommentDialog/>}
        </div>
    );
};
