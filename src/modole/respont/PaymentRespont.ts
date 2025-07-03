export interface PaymentRespont {
    vnp_TmnCode:string,
    vnp_TxnRef:string,
    vnp_Amount:string,
    vnp_OrderInfo:string,
    vnp_BankCode:string,
    vnp_BankTranNo:string,
    vnp_CardType:string,
    vnp_PayDate:string,
    vnp_TransactionNo:string,
    isSuccess:boolean
}