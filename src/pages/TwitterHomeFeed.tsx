import React from "react";
import type {Tweet} from "../modole/entity/Tweet.ts";
import {TweetCard} from "../components/TweetCard.tsx";

export const TwitterHomeFeed: React.FC = () => {

    const tweets: Tweet[] = [
        {
            id: 1,
            author: {
                name: 'Sonali Hirave',
                username: 'ShonaDesign',
                avatar: 'https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png'
            },
            content: 'Day 07 of the challenge #100DaysOfCode I was wondering what I can do with #tailwindcss, so just started building Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion. [07/100] #WomenWhoCode #CodeNewbie',
            timestamp: '16 April',
            stats: {
                comments: 12,
                retweets: 8,
                likes: 45
            }
        },
        {
            id: 2,
            author: {
                name: 'Sonali Hirave',
                username: 'ShonaDesign',
                avatar: 'https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png'
            },
            content: 'Day 07 of the challenge #100DaysOfCode I was wondering what I can do with #tailwindcss, so just started building Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion. [07/100] #WomenWhoCode #CodeNewbie',
            timestamp: '16 April',
            image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80',
            stats: {
                comments: 5,
                retweets: 12,
                likes: 67
            }
        },
        {
            id: 3,
            author: {
                name: 'Sonali Hirave',
                username: 'ShonaDesign',
                avatar: 'https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png'
            },
            content: 'Day 07 of the challenge #100DaysOfCode I was wondering what I can do with #tailwindcss, so just started building Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion. [07/100] #WomenWhoCode #CodeNewbie',
            timestamp: '16 April',
            stats: {
                comments: 3,
                retweets: 6,
                likes: 23
            }
        },
        {
            id: 3,
            author: {
                name: 'Sonali Hirave',
                username: 'ShonaDesign',
                avatar: 'https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png'
            },
            content: 'Day 07 of the challenge #100DaysOfCode I was wondering what I can do with #tailwindcss, so just started building Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion. [07/100] #WomenWhoCode #CodeNewbie',
            timestamp: '16 April',
            stats: {
                comments: 3,
                retweets: 6,
                likes: 23
            }
        },
        {
            id: 3,
            author: {
                name: 'Sonali Hirave',
                username: 'ShonaDesign',
                avatar: 'https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png'
            },
            content: 'Day 07 of the challenge #100DaysOfCode I was wondering what I can do with #tailwindcss, so just started building Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion. [07/100] #WomenWhoCode #CodeNewbie',
            timestamp: '16 April',
            stats: {
                comments: 3,
                retweets: 6,
                likes: 23
            }
        },
        {
            id: 3,
            author: {
                name: 'Sonali Hirave',
                username: 'ShonaDesign',
                avatar: 'https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png'
            },
            content: 'Day 07 of the challenge #100DaysOfCode I was wondering what I can do with #tailwindcss, so just started building Twitter UI using Tailwind and so far it looks so promising. I will post my code after completion. [07/100] #WomenWhoCode #CodeNewbie',
            timestamp: '16 April',
            stats: {
                comments: 3,
                retweets: 6,
                likes: 23
            }
        }
    ];
    return (
        <>
            <div className="bg-white min-h-screen">
                <div className="max-w-2xl mx-auto border-x border-gray-700">
                    <div>
                        {tweets.map((tweet) => (
                            <TweetCard key={tweet.id} tweet={tweet}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}