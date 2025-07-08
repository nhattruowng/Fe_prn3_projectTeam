import type {BaseResponse} from "../modole/BaseResponseModel.ts";
import type {PaymentRespont} from "../modole/respont/PaymentRespont.ts";
import api from "./api.ts";
import {PAYMENTS_API} from "../../EndPoint.ts";

export const VnpayReturn = async (): Promise<BaseResponse<PaymentRespont>> => {
    const res = await api.get(`${PAYMENTS_API}/vnpay-return`);
    return res.data;
}