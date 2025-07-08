import {
    CompleteProgessLog,
    CreateProgressLog,
    DeleteProgressLog,
    EditProgressLog, FailedProgessLog,
    GetAllProrssLog,
    GetProgressLogbyId, UpdateProgessLog
} from "../api/ProgressLogsApi.ts";
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
export const useGetProgessLog = () => {
    return useApiHandler(GetAllProrssLog);
}

export const useUpdateProgressLog = () => {
    return useApiHandler(UpdateProgessLog);
}

export const useCompleteProgessLog = () => {
    return useApiHandler(CompleteProgessLog)
}

export const useFailedProgessLog = () => {
    return useApiHandler(FailedProgessLog)
}