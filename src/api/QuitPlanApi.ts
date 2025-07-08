import api from "./api.ts";
import {QUITPLAN_API} from "../../EndPoint.ts";
import type {QuitPlanRequest, QuitPlanRequet} from "../modole/request/QuitPlanRequest.ts";
import type {BaseResponse, PaginatedList} from "../modole/BaseResponseModel.ts";
import type {QuitPlanRespont} from "../modole/respont/QuitPlanRespont.ts";

export const CreateQuitPlan = async (QuitPlanRequest: QuitPlanRequest, token: string): Promise<BaseResponse<string>> => {
    const res = await api.post(`${QUITPLAN_API}`, QuitPlanRequest, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return res.data;
}


export const DeleteQuitPlan = async (id: string, token: string) => {
    const res = await api.delete(`${QUITPLAN_API}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return res.data;
}

export const UpdateQuitPlan = async () => {

}

export const GetQuitPlan = async (QuitPlanRequet: QuitPlanRequet, token: string): Promise<PaginatedList<QuitPlanRespont>> => {
    const res = await api.get(`${QUITPLAN_API}?isCurrentUser=true`, {
        params: {
            QuitPlanRequet
        }, headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return res.data;
}