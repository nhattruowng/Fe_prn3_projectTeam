import type {GetBlogRespont} from "../modole/respont/BlogRespont.ts";
import type {BlogFillterRequet, CreatBlog, GetBlogAuthor} from "../modole/request/BlogFillterRequet.ts";
import api from "./api.ts";
import {BLOG_API} from "../../EndPoint.ts";
import type {BaseResponse, PaginatedList} from "../modole/BaseResponseModel.ts";


export const CreatNewBlog = async (CreatBlog: CreatBlog, token: string): Promise<BaseResponse<string>> => {

    const formData = new FormData();
    formData.append("Title", CreatBlog.Title);
    formData.append("Content", CreatBlog.Content);
    if (CreatBlog.FeaturedImage) {
        formData.append("FeaturedImage", CreatBlog.FeaturedImage);
    }
    const res = await api.post(`${BLOG_API}`, formData, {
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
    return res.data;
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

export const GetBlog = async (id: string): Promise<BaseResponse<GetBlogRespont>> => {
    const res = await api.get(`${BLOG_API}/${id}`, {
        headers: {
            Accept: "application/json"
        }
    })
    return res.data;
}


export const ApproveBlog = async (id: string, token: string): Promise<any> => {
    const res = await api.patch(`${BLOG_API}/${id}/approve`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.data;
}

export const RejectBlog = async (id: string, token: string): Promise<any> => {
    const res = await api.patch(`${BLOG_API}/${id}/reject`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.data;
}

export const ViewBlog = async (id: string, token: string): Promise<BaseResponse<string>> => {
    const res = await api.put(`${BLOG_API}/${id}/view`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return res.data;
}

export const GetBlogAuthorAPI = async (GetBlogAuthor: GetBlogAuthor): Promise<PaginatedList<GetBlogRespont>> => {
    const res = await api.get(`${BLOG_API}/author`, {
        params: {
            authorId:GetBlogAuthor.authorId,
            PageNumber:GetBlogAuthor.PageNumber,
            PageSize:GetBlogAuthor.PageSize,
        }, headers: {
            Authorization: `Bearer ${GetBlogAuthor.token}`
        }
    })
    return res.data;
}