type status = "Pending" | "Completed" | "Failed";

export interface ProgressLogs {
    id: string;
    quitPlanName: string;
    userName: string | null;
    logDate: string;
    smokedToday: number;
    note: string;
    status: status;
    coachAdvice: string | null;
}