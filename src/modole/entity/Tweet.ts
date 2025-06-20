export interface Tweet {
    id: number;
    author: {
        name: string;
        username: string;
        avatar: string;
    };
    content: string;
    timestamp: string;
    image?: string;
    stats: {
        comments: number;
        retweets: number;
        likes: number;
    };
}