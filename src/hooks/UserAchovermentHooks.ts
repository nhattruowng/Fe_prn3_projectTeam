import {useApiHandler} from "../api/useApiHandler.ts";
import {getrUserAchoverment} from "../api/UserAchivermentApi.ts";

export const useGetAchivermentHook = () => {
  return useApiHandler(getrUserAchoverment);
}