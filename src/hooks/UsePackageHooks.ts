import {
    CancelUserPackage,
    CreateNewUserPackage,
    GetHistoryUserPackage,
    GetUserPackageCurrent
} from "../api/UserPackage.ts";
import {useApiHandler} from "../api/useApiHandler.ts";


export const useCreateNewUserPackage = () => {
    return useApiHandler(CreateNewUserPackage);
}

export const useGetUserPackageCurrent = () => {
    return useApiHandler(GetUserPackageCurrent);
}

export const useCancelUserPackage = () => {
    return useApiHandler(CancelUserPackage);
}

export const useGetHistoryUserPackage = () => {
    return useApiHandler(GetHistoryUserPackage);
}

