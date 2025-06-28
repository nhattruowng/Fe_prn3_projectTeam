import {
    CreateFeedback,
    DeleteFeedback,
    EditFeedback,
    GetFeedbackByBlogId,
    GetFeedbackbyId, GetFeedbackByUserId
} from "../api/FeedbackApi.ts";
import {useApiHandler} from "../api/useApiHandler.ts";

export const useCreateFeedback = () => {
    return useApiHandler(CreateFeedback);
}

export const useEditFeedback = () => {
    return useApiHandler(EditFeedback);
}

export const useDeleteFeedback = () => {
    return useApiHandler(DeleteFeedback);
}

export const useGetFeedbackbyId = () => {
    return useApiHandler(GetFeedbackbyId);
}

export const useGetFeedbackByBlogId = () => {
    return useApiHandler(GetFeedbackByBlogId);
}

export const useGetFeedbackByUserId = () => {
    return useApiHandler(GetFeedbackByUserId);
}