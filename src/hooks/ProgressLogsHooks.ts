import {CreateProgressLog, DeleteProgressLog, EditProgressLog, GetProgressLogbyId} from "../api/ProgressLogsApi.ts";
import {useApiHandler} from "../api/useApiHandler.ts";

export const useCreateProgressLog = () => {
    return useApiHandler(CreateProgressLog);
}

export const useDeleteProgressLog = () => {
    return useApiHandler(DeleteProgressLog);
}

export const useEditProgressLog = () => {
    return useApiHandler(EditProgressLog);
}

export const useGetProgressLogbyId = () => {
    return useApiHandler(GetProgressLogbyId);
}