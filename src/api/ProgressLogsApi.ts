import type {CreateProgressLogsRequest} from "../modole/request/ProgressLogsRequet.ts";
import api from "./api.ts";
import {PROGRESSLOGS_API} from "../../EndPoint.ts";

export const CreateProgressLog = async (CreateProgressLogsRequest: CreateProgressLogsRequest, token: string): Promise<any> => {
    const res = await api.post(`${PROGRESSLOGS_API}`, CreateProgressLogsRequest, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return res.data;
}


export const DeleteProgressLog = async (id: string, token: string): Promise<any> => {
    const res = await api.delete(`${PROGRESSLOGS_API}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return res.data;
}

export const EditProgressLog = async (id: string, token: string): Promise<any> => {
    const res = await api.patch(`${PROGRESSLOGS_API}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return res.data;
}

export const GetProgressLogbyId = async (id: string): Promise<any> => {
    const res = await api.get(`${PROGRESSLOGS_API}/${id}`);
    return res.data;
}


