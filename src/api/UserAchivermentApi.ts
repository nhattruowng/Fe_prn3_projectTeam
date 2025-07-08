import api from "./api.ts";
import {USER_ACHIEVEMENTS_API} from "../../EndPoint.ts";
import type {BaseResponse} from "../modole/BaseResponseModel.ts";
import type {UserAchovermentRespont} from "../modole/respont/UserAchovermentRespont.ts";

export const getrUserAchoverment = async (id: string)
    : Promise<BaseResponse<{
    userName: string,
    grantedAt: string,
    achievements: UserAchovermentRespont[]
}>> => {
    const res = await api.get(`${USER_ACHIEVEMENTS_API}/${id}`);
    return res.data;
}