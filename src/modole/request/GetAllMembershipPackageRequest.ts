export type Type = 0 | 1 | 2 | 3 | null;

export interface GetAllMembershipPackageRequest {
    PageNumber: number;
    PageSize: number;
    Name: string;
    Description: string;
    Type: Type;
}