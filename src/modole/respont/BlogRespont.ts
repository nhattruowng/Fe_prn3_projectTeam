import type {Blog} from "../entity/Blog.ts";

export interface BlogRespont {
    additionalData: string;
    message: string;
    statusCode: string;
    code: string;
    items: Blog[];
}

export interface GetBlogRespont {
    id: string;
    title: string;
    content: string;
    featuredImageUrl: string;
    views: string;
    status: string;
    publishedDate: string;
    authorName: string;
    averageRating: string;
    commentsCount: number;
}

