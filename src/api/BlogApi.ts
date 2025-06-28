import type {GetBlogRespont} from "../modole/respont/BlogRespont.ts";
import type {BlogFillterRequet, CreatBlog} from "../modole/request/BlogFillterRequet.ts";
import api from "./api.ts";
import {BLOG_API} from "../../EndPoint.ts";
import type {BaseResponse, PaginatedList} from "../modole/BaseResponseModel.ts";


export const CreatNewBlog = async (CreatBlog: CreatBlog, token: string): Promise<BaseResponse<string>> => {
    const res = await api.post(`${BLOG_API}`, CreatBlog, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return res.data;
}

export const GetAllBlog = async ({
                                     PageNumber,
                                     PageSize,
                                     filterType,
                                     status,
                                 }: BlogFillterRequet): Promise<PaginatedList<GetBlogRespont>> => {

    const res = await api.get(BLOG_API, {
        params: {
            PageNumber,
            PageSize,
            filterType,
            status
        }
    })
    return res.data.data;
}

export const DeleteBlog = async (id: string,
                                 token: string): Promise<BaseResponse<string>> => {
    const res = await api.delete(`${BLOG_API}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.data;
}


export const UpdateBlog = async (id: string,
                                 BlogUpdate: CreatBlog,
                                 token: string): Promise<BaseResponse<string>> => {
    const res = await api.patch(`${BLOG_API}/${id}`, BlogUpdate, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.data;
}

export const GetBlog = async (id: string): Promise<BaseResponse<BaseResponse<GetBlogRespont>>> => {
    const res = await api.get(`${BLOG_API}/${id}`, {
        headers: {
            Accept: "application/json"
        }
    })
    return res.data;
}


export const ApproveBlog = async (id: string, token: string): Promise<{ statusCode: number, result: BaseResponse }> => {
    const res = await api.patch(`${BLOG_API}/${id}/approve`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.data;
}

export const RejectBlog = async (id: string, token: string): Promise<{ statusCode: number, result: BaseResponse }> => {
    const res = await api.patch(`${BLOG_API}/${id}/reject`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.data;
}

export const ViewBlog = async (id: string, token: string): Promise<BaseResponse<BaseResponse>> => {
    const res = await api.put(`${BLOG_API}/${id}/view`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.data;
}
