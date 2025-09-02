'use client'


// @ts-ignore
const daysLeft = (endDate: string) => {
    const now = new Date()
    const end = new Date(endDate)
    const diffTime = end.getTime() - now.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays > 0) {
        return `${diffDays} days left.`
    } else if (diffDays === 0) {
        return `It is due today.`
    } else {
        return `It is past the due date.`
    }
};

export function DaysLeftCalculate({ endDate }: { endDate: string }) {
    return <span>{daysLeft(endDate)}</span>
}