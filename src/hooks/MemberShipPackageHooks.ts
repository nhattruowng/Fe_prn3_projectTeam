import {
    CreatNewMemberShipPackage, DeleteMemberShipPackage, EditMemberShipPackage,
    GetMemberShipPackageApi, getMemberShipPackageById,
} from "../api/MemberShipPackageApi.ts";
import {useApiHandler} from "../api/useApiHandler.ts";

export const useGetAllMembershipPackage = () => {
    return useApiHandler(GetMemberShipPackageApi);
};


export const useCreatNewMemberShipPackage = () => {
    return useApiHandler(CreatNewMemberShipPackage);
}


export const useGetMemberShipPackageById = () => {
    return useApiHandler(getMemberShipPackageById);
}


export const useEditMemberShipPackage = () => {
    return useApiHandler(EditMemberShipPackage);
}


export const useDeleteMemberShipPackage = () => {
    return useApiHandler(DeleteMemberShipPackage);
}


