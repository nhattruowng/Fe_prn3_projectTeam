export type BaseResponse<T> = {
    data?: T;
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
