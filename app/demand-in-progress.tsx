"use client"

import {AlarmClockCheckIcon, AlarmClockIcon, TrendingUp} from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {DaysLeftCalculate} from "@/app/days-left-calculate";

export const description = "A radial chart with stacked sections"

const chartData = [{unfulfilled: 7, in_progress: 7, fulfilled: 0 }]

const chartConfig = {
    unfulfilled: {
        label: "Unfulfilled",
        color: "var(--chart-1))",
    },
    in_progress: {
        label: "In Progress",
        color: "#fff",
    },
    fulfilled: {
        label: "Fulfilled",
        color: "var(--chart-1)",
    }
} satisfies ChartConfig

export function DemandInProgressWeek() {
    const totalVisitors = 17

    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>17 Initial Demands</CardTitle>
                <CardDescription>Due Friday, 5 September 2025</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 items-center pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square w-full !h-[200px]"
                >
                    <RadialBarChart
                        data={chartData}
                        startAngle={90}
                        endAngle={-270}
                        innerRadius={80}
                        outerRadius={110}
                    >
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) - 30}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {chartData[0].in_progress}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) - 10}
                                                    className="fill-muted-foreground"
                                                >
                                                    In Progress
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 30}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {chartData[0].fulfilled}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 50}
                                                    className="fill-muted-foreground"
                                                >
                                                    Fulfilled
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                        <RadialBar
                            dataKey="unfulfilled"
                            stackId="a"
                            cornerRadius={0}
                            fill="var(--color-red-400)"
                            className="stroke-transparent stroke-2"
                        />
                        <RadialBar
                            dataKey="in_progress"
                            fill="var(--color-yellow-100)"
                            stackId="a"
                            cornerRadius={0}
                            className="stroke-transparent stroke-2"
                        />
                        <RadialBar
                            dataKey="fulfilled"
                            fill="var(--green-color)"
                            stackId="a"
                            cornerRadius={0}
                            className="stroke-transparent stroke-2"
                        />
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="font-semibold leading-none">
                    <DaysLeftCalculate endDate="2025-09-05" />
                </div>
            </CardFooter>
        </Card>
    )
}
