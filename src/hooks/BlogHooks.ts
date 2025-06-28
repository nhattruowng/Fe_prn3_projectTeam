import {
    ApproveBlog,
    CreatNewBlog,
    DeleteBlog,
    GetAllBlog,
    GetBlog,
    RejectBlog,
    UpdateBlog,
    ViewBlog
} from "../api/BlogApi.ts";
import {useApiHandler} from "../api/useApiHandler.ts";

export const useCreatNewBlog = () => {
    return useApiHandler(CreatNewBlog);
}

export const useGetAllBlog = () => {
    return useApiHandler(GetAllBlog);
}

export const useDeleteBlog = () => {
    return useApiHandler(DeleteBlog);
}

export const useUpdateBlog = () => {
    return useApiHandler(UpdateBlog);
}

export const useGetBlogId = () => {
    return useApiHandler(GetBlog);
}


export const useApproveBlog = () => {
    return useApiHandler(ApproveBlog);
}


export const useRejectBlog = () => {
    return useApiHandler(RejectBlog);
}


export const useViewBlog = () => {
    return useApiHandler(ViewBlog);
}