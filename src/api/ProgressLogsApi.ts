import type {
    CreateProgressLogsRequest,
    FillterProgressLogsRequest,
    inforProgressLogsRequest
} from "../modole/request/ProgressLogsRequet.ts";
import api from "./api.ts";
import {PROGRESSLOGS_API} from "../../EndPoint.ts";
import type {BaseResponse, PaginatedList} from "../modole/BaseResponseModel.ts";
import type {ProgressLogs} from "../modole/respont/ProgressLogsRespont.tsx";

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


export const GetAllProrssLog = async ({
                                          PageNumber,
                                          PageSize,
                                          QuitPlanName
                                      }: FillterProgressLogsRequest, token: string): Promise<PaginatedList<ProgressLogs>> => {

    const res = await api.get(`${PROGRESSLOGS_API}`, {
        params: {
            PageNumber,
            PageSize,
            QuitPlanName,
        }, headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return res.data;

}

export const UpdateProgessLog = async (
    id: string,
    inforProgressLogsRequest: inforProgressLogsRequest,
    token: string): Promise<BaseResponse<string>> => {
    const res = await api.patch(`${PROGRESSLOGS_API}/${id}/info`, inforProgressLogsRequest, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return res.data;
}


export const CompleteProgessLog = async (id: string, token: string): Promise<BaseResponse<string>> => {
    const res = await api.patch(`${PROGRESSLOGS_API}/${id}/Complete`,null, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return res.data;
}
export const FailedProgessLog = async (id: string, token: string): Promise<BaseResponse<string>> => {
    const res = await api.patch(`${PROGRESSLOGS_API}/${id}/Failed`,null, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return res.data;
}
