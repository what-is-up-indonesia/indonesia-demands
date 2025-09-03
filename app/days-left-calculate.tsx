'use client'


// @ts-ignore
const daysLeft = (endDate: string) => {
    const now = new Date()
    const end = new Date(endDate)
    const nowUTC = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()))
    const diffTime = end.getTime() - nowUTC.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays > 0) {
        return `${diffDays} days left.`
    } else if (diffDays === 0) {
        return `It is due today.`
    } else if (diffDays === 1) {
        return `It is due tomorrow.`
    } else {
        return `It is past the due date.`
    }
};

export function DaysLeftCalculate({ endDate }: { endDate: string }) {
    return <span>{daysLeft(endDate)}</span>
}