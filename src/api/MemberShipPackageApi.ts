import type {GetAllMembershipPackageRequest} from "../modole/request/GetAllMembershipPackageRequest.ts";
import type {MemberShipPackageRespont} from "../modole/respont/MemberShipPackageRespont.ts";
import api from "./api.ts";
import {GET_MEMBERSHIP_PACKAGE} from "../../EndPoint.ts";


export const GetMemberShipPackageApi = async ({
                                                  Name,
                                                  PageNumber,
                                                  PageSize,
                                                  Type,
                                                  Description
                                              }: GetAllMembershipPackageRequest): Promise<MemberShipPackageRespont> => {
    const res = await api.get(GET_MEMBERSHIP_PACKAGE, {
        params: {
            Name,
            PageNumber,
            PageSize,
            Type,
            Description
        }
    });
    return res.data;
}