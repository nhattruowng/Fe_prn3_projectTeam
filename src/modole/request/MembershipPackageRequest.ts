export type Type = 0 | 1 | 2 | 3 | null;

export interface MembershipPackageRequest {
    PageNumber: number;
    PageSize: number;
    Name: string;
    Description: string;
    Type: Type;
}


export interface CreatMemberShipPackage {
    name:string;
    type:Type;
    price:string;
    description:string;
    durationMonths:string;
    features:string;
}