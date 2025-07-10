export interface Statistics {
    cigarettesThisWeek: number;
    cigarettesThisMonth: number;
    totalSmokeFreeDays: number;
    dailyCountsThisMonth: dailyCountsThisMonth[];
}

export interface dailyCountsThisMonth {
    date: Date;
    cigarettesSmoked: number;
}