export interface CreateProgressLogsRequest {
    quitPlanId: string;
    smokedToday: number;
    note: string;
}

export interface FillterProgressLogsRequest {
    PageNumber: number;
    PageSize: number;
    QuitPlanName: string | null;

}

export interface inforProgressLogsRequest {
    smokedToday:number;
    note: string;
}