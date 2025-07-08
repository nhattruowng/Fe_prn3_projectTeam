import {useApiHandler} from "../api/useApiHandler.ts";
import {VnpayReturn} from "../api/PaymentApi.ts";

export const usePaymentReturn = () => {
  return useApiHandler(VnpayReturn);
}