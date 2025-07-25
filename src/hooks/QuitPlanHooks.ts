import {CreateQuitPlan, DeleteQuitPlan, GetQuitPlan} from "../api/QuitPlanApi.ts";
import {useApiHandler} from "../api/useApiHandler.ts";


export const useCreateQuitPlan = () => {
    return useApiHandler(CreateQuitPlan);
}


export const useDeleteQuitPlan = () => {
    return useApiHandler(DeleteQuitPlan);
}

export const useGetAllQuitPlans = () => {
   return useApiHandler(GetQuitPlan);
}