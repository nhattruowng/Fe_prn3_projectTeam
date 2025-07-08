type Type = 0 | 1 | 2 | 3;

export interface BlogFillterRequet {
    PageNumber: number;
    PageSize: number;
    filterType: Type;
    status: Type;
}

export interface CreatBlog {
    Title: string;
    Content: string;
    FeaturedImage: File | null,
}

export interface BlogUpdate {
    Title: string;
    Content: string;
    FeaturedImage: string,
}

export interface GetBlogAuthor {
    authorId: string,
    PageNumber: number,
    PageSize: number,
    token: string
}