import {useApiHandler} from "../api/useApiHandler.ts";
import {GetAllBlog} from "../api/BlogApi.ts";

export const useGetBlog = () => {
    return useApiHandler(GetAllBlog);
}