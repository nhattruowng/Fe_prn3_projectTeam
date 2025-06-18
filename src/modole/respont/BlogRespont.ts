import type {Blog} from "../entity/Blog.ts";

export interface BlogRespont {
    additionalData: string;
    message: string;
    statusCode: string;
    code: string;
    items: Blog[];
}