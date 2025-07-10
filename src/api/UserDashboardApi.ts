import type {BaseResponse} from "../modole/BaseResponseModel.ts";
import type {Statistics} from "../modole/respont/Statistics.ts";
import api from "./api.ts";
import {USER_DASHBOARDS_API} from "../../EndPoint.ts";

export const UserDashboardApi = async (id: string, month: string, token: string): Promise<BaseResponse<Statistics>> => {
    const res = await api.get(`${USER_DASHBOARDS_API}/statistics/${id}?month=${month}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return res.data;
}