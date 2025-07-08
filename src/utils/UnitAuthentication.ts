import { useSelector } from "react-redux";
import type { RootState } from "../store/store.ts";

export const useCheckUserExist = () => {
    const user = useSelector((state: RootState) => state.user.user);
    return !!user;
};

