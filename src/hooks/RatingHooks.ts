import {
    CreateNewRating,
    DeleteRating,
    EditRating,
    GetRatingByBlogId,
    GetRatingById,
    GetRatingByUserId
} from "../api/RatingApi.ts";
import {useApiHandler} from "../api/useApiHandler.ts";

export const useCreateNewRating = () => {
    return useApiHandler(CreateNewRating)
}

export const useEditRating = () => {
    return useApiHandler(EditRating)
}

export const useDeleteRating = () => {
    return useApiHandler(DeleteRating)
}

export const useGetRatingById = () => {
    return useApiHandler(GetRatingById)
}

export const useGetRatingByUserId = () => {
    return useApiHandler(GetRatingByUserId)
}

export const useGetRatingByBlogId = () => {
    return useApiHandler(GetRatingByBlogId)
}