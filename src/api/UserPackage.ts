import api from "./api.ts";
import {USERPACKAGE_API} from "../../EndPoint.ts";


export const CreateNewUserPackage = async (membershipPackageId: string, token: string): Promise<string> => {
    const res = await api.post(`${USERPACKAGE_API}/register`, {membershipPackageId}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.data;
}


export const GetUserPackageCurrent = async (token: string): Promise<string> => {
    const res = await api.get(`${USERPACKAGE_API}/current`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
}

export const CancelUserPackage = async (token: string): Promise<string> => {
    const res = await api.post(`${USERPACKAGE_API}/cancel`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.data;
}


export const GetHistoryUserPackage = async (token: string): Promise<string> => {
    const res = await api.post(`${USERPACKAGE_API}/history`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.data;
}

export const GetUserPackageById = async (id: string, token: string): Promise<string> => {
    const res = await api.post(`${USERPACKAGE_API}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.data;
}
