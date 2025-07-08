export interface QuitPlanRequest {
    reason: string;
    cigarettesPerDayBeforeQuit: number;
    yearsSmokingBeforeQuit: number;
}

type Status = 0 | 1 | 2 | null;
type isCurrentUser = true | false | null;

export interface QuitPlanRequet {
    // PageNumber: number | null,
    // PageSize: number | 30,
    // StartDate: string | null,
    // Status: Status,
    // UserName: string | null,
    // isCurrentUser: isCurrentUser
}