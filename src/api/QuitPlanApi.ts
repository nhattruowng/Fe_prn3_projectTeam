import api from "./api.ts";
import {QUITPLAN_API} from "../../EndPoint.ts";
import type {QuitPlanRequest} from "../modole/request/QuitPlanRequest.ts";
import type {BaseResponse} from "../modole/BaseResponseModel.ts";

export const CreateQuitPlan = async (QuitPlanRequest: QuitPlanRequest, token: string): Promise<BaseResponse<string>> => {
    const res = await api.post(`${QUITPLAN_API}`, QuitPlanRequest, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return res.data;
}

export const GetQuitPlan = () => {

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