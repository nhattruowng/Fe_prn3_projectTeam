import type {BlogFillterRequet} from "../modole/request/BlogFillterRequet.ts";
import type {BlogRespont} from "../modole/respont/BlogRespont.ts";
import {useEffect, useState} from "react";
import {GetAllBlog} from "../api/BlogApi.ts";

export const useGetBlog = (requestParams: BlogFillterRequet) => {

    const [data, setData] = useState<BlogRespont>();
    const [message, setMessage] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {

        const fetch = async () => {
            try {
                setLoading(true);
                const res = await GetAllBlog(requestParams);
                setData(res);
            } catch (error) {
                setMessage("Lỗi khi tải dữ liệu");
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetch();

    }, [requestParams]);

    return {data, loading, message};
}