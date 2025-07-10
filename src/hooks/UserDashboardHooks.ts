import {useApiHandler} from "../api/useApiHandler.ts";
import {UserDashboardApi} from "../api/UserDashboardApi.ts";

export const UserDashboardHooks = () => {
  return useApiHandler(UserDashboardApi);
}