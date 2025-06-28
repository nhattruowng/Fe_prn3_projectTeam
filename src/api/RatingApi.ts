import type {CreateRating} from "../modole/request/RatingRequest.ts";
import api from "./api.ts";
import {RATING_API} from "../../EndPoint.ts";


export const CreateNewRating = async (CreateRating: CreateRating, token: string) => {
    const res = await api.post(`${RATING_API}`, CreateRating, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return res.data;
}


export const EditRating = async (id: string, CreateRating: CreateRating, token: string): Promise<any> => {
    const res = await api.put(`${RATING_API}/${id}`, CreateRating, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return res.data;
}


export const DeleteRating = async (id: string, token: string): Promise<any> => {
    const res = await api.delete(`${RATING_API}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return res.data;
}

export const GetRatingById = async (id: string): Promise<any> => {
    const res = await api.get(`${RATING_API}/${id}`);
    return res.data;
}


export const GetRatingByUserId = async (id: string): Promise<any> => {
    const res = await api.get(`${RATING_API}/by-user/${id}`);
    return res.data;
}

export const GetRatingByBlogId = async (id: string): Promise<any> => {
    const res = await api.get(`${RATING_API}/by-blog/${id}`);
    return res.data;
}