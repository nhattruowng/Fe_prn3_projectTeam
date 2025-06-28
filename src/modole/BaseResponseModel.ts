export type BaseResponse<T = any> = {
    data?: T | string[];
    additionalData?: any;
    message?: string;
    statusCode: number;
    code: string;
};

export interface PaginatedList<T> {
    items: T[];
    pageNumber: number;
    totalPages: number;
    totalCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}
