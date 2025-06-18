import type {MemberShipPackage} from "../entity/MemberShipPackage.ts";

export interface MemberShipPackageRespont {
    data: {
        items: MemberShipPackage[];
        pageNumber: number;
        totalPages:number;
        totalCount:number;
        pageSize:number;
        hasPreviousPage:boolean;
        hasNextPage:boolean;
    },
    additionalData:string;
    message:string;
    statusCode:string;
    code:string;
}