export interface QuitPlanRespont {
    id: string;
    reason: string;
    startDate: Date,
    targetDate: Date,
    cigarettesPerDayBeforeQuit: number,
    yearsSmokingBeforeQuit: number,
    status: string,
    userId: string,
    smokeFreeDays: number
}

// "id": "0197d24b-678b-720c-a775-385c37f76745",
//     "reason": "Muốn Cải Thiện Sức Khoẻ",
//     "startDate": "2025-07-03T21:57:24.566346+00:00",
//     "targetDate": "2025-08-02T21:57:24.566346+00:00",
//     "cigarettesPerDayBeforeQuit": 12,
//     "yearsSmokingBeforeQuit": 2,
//     "status": "Active",
//     "userId": "0197c1dd-5cad-725d-afff-c3450d1d3901",
//     "packageId": "00000000-0000-0000-0000-000000000000",
//     "packageName": null,
//     "smokeFreeDays": 0,
//     "healthImpact": null