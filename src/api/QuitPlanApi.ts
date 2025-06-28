import api from "./api.ts";
import {QUITPLAN_API} from "../../EndPoint.ts";

export const CreateQuitPlan = async (reason: string, token: string): Promise<any> => {
    const res = await api.post(`${QUITPLAN_API}`, {
        reason: reason,
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return res.data;
}

export const GetQuitPlan = () => {

}

export const DeleteQuitPlan = async (id: string, token: string) => {
    const res = await api.delete(`${QUITPLAN_API}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return res.data;
}

export const UpdateQuitPlan = async () => {
  
}