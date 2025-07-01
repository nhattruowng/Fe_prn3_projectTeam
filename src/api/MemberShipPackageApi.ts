import type {CreatMemberShipPackage, MembershipPackageRequest} from "../modole/request/MembershipPackageRequest.ts";
import type {MemberShipPackageResponse} from "../modole/respont/MemberShipPackageRespont.ts";
import api from "./api.ts";
import {MEMBERSHIP_PACKAGE_API} from "../../EndPoint.ts";
import type {BaseResponse, PaginatedList} from "../modole/BaseResponseModel.ts";


export const GetMemberShipPackageApi = async ({
                                                  Name,
                                                  PageNumber,
                                                  PageSize,
                                                  Type,
                                                  Description
                                              }: MembershipPackageRequest): Promise<PaginatedList<MemberShipPackageResponse>> => {
    const res = await api.get(MEMBERSHIP_PACKAGE_API, {
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


export const CreatNewMemberShipPackage = async (CreatMemberShipPackage: CreatMemberShipPackage, token: string): Promise<BaseResponse<string>> => {
    const res = await api.post(MEMBERSHIP_PACKAGE_API, CreatMemberShipPackage, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.data;
}

export const getMemberShipPackageById = async (id: string): Promise<BaseResponse<MemberShipPackageResponse>> => {
    const res = await api.get(`${MEMBERSHIP_PACKAGE_API}/${id}`);
    return res.data;
}


export const EditMemberShipPackage = async (id: string, CreatMemberShipPackage: CreatMemberShipPackage, token: string): Promise<BaseResponse<string>> => {
    const res = await api.post(`${MEMBERSHIP_PACKAGE_API}/${id}`, CreatMemberShipPackage, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.data;
}

export const DeleteMemberShipPackage = async (id: string, token: string): Promise<BaseResponse<string>> => {
    const res = await api.delete(`${MEMBERSHIP_PACKAGE_API}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
}