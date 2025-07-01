import type {CreatFeedback} from "../modole/request/FeedbackRequest.ts";
import api from "./api.ts";
import {FEEDBACK_API} from "../../EndPoint.ts";
import type {BaseResponse, PaginatedList} from "../modole/BaseResponseModel.ts";
import type {Comments} from "../modole/respont/FeedbackResponse.ts";


export const CreateFeedback = async ({
                                         comment,
                                         blogId
                                     }: CreatFeedback,
                                     token: string): Promise<BaseResponse<BaseResponse<any>>> => {
    const res = await api.post(`${FEEDBACK_API}`, {blogId, comment}, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return res.data;
}


export const EditFeedback = async (id: string,
                                   {comment, blogId}: CreatFeedback,
                                   token: string): Promise<BaseResponse<BaseResponse<any>>> => {
    const res = await api.put(`${FEEDBACK_API}/${id}`, {blogId, comment}, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return res.data;
}


export const DeleteFeedback = async (id: string,
                                     token: string): Promise<BaseResponse<BaseResponse<any>>> => {
    const res = await api.delete(`${FEEDBACK_API}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return res.data;
}


export const GetFeedbackbyId = async (id: string): Promise<BaseResponse<BaseResponse<PaginatedList<Comments>>>> => {
    const res = await api.get(`${FEEDBACK_API}/${id}`);
    return res.data;
}

export const GetFeedbackByBlogId = async (id: string,
                                          PageSize: number,
                                          PageNumber: number): Promise<PaginatedList<Comments>> => {
    const res = await api.get(`${FEEDBACK_API}/by-blog/${id}`, {
        params: {
            PageNumber,
            PageSize,
        }
    })
    console.log(res)
    return res.data.data;
}

export const GetFeedbackByUserId = async (id: string,
                                          PageSize: number,
                                          PageNumber: number): Promise<BaseResponse<Comments>> => {
    const res = await api.get(`${FEEDBACK_API}/by-user/${id}`, {
        params: {
            PageNumber,
            PageSize,
        }
    })
    return res.data;
}


