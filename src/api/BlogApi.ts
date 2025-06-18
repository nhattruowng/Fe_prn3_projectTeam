import type {BlogRespont} from "../modole/respont/BlogRespont.ts";
import type {BlogFillterRequet} from "../modole/request/BlogFillterRequet.ts";
import api from "./api.ts";
import {GET_ALL_BLOG} from "../../EndPoint.ts";


export const GetAllBlog = async ({PageNumber, PageSize}: BlogFillterRequet): Promise<BlogRespont> => {

    const res = await api.get(GET_ALL_BLOG, {
        params: {
            PageNumber,
            PageSize
        }
    })

    return res.data;

}