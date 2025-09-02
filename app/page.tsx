import {DemandAccordion} from "@/app/demand-accordion";
import {Alert, AlertTitle} from "@/components/ui/alert";
import {AlarmClockCheckIcon, AlertCircleIcon} from "lucide-react";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import {DemandFulfilledWeek} from "@/app/demand-fulfilled";
import {DemandFulfilledYear} from "@/app/demand-fulfilled-year";
import {DemandInProgressWeek} from "@/app/demand-in-progress";
import {DaysLeftCalculate} from "@/app/days-left-calculate";
import {DemandInProgressYear} from "@/app/demand-in-progress-year";
import {DemandYearAccordion} from "@/app/demand-year-accordion";

export default function Home() {
    return (
        <div>
            <h1 className="text-(--pink-color) scroll-m-20 text-9xl font-extrabold tracking-tighter text-balance mt-8">
                17 + 8
            </h1>
            <h1 className="text-(--pink-color) scroll-m-20 text-7xl font-extrabold text-balance uppercase tracking-wide">Demands
                from the people</h1>
            <h1 className="text-(--green-color) scroll-m-20 text-5xl font-bold tracking-tight text-balance my-4">Transparency,
                Reformation, Empathy.</h1>

            <p>For the Indonesian version, go to <Link className="text-(--pink-color) hover:underline" href="https://rakyatmenuntut.com/">Rakyat Menuntut</Link>.</p>

            <h1 className="text-3xl font-extrabold tracking-tight text-balance mt-12">
                First 17 Demands
            </h1>
            <Alert variant="destructive" className="mt-6">
                <AlarmClockCheckIcon/>
                <AlertTitle>
                    Due on Friday, 5 September 2025. <DaysLeftCalculate endDate="2025-09-05" />
                </AlertTitle>
            </Alert>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <DemandInProgressWeek/>
                <DemandFulfilledWeek/>
            </div>

            <h2 className="font-bold text-xl mt-8">
                For President Prabowo
            </h2>
            <DemandAccordion target="Prabowo"/>

            <h2 className="font-bold text-xl mt-8">
                For the House of Representatives (DPR)
            </h2>
            <DemandAccordion target="DPR" start={3}/>

            <h2 className="font-bold text-xl mt-8">
                For the Heads of Political Parties
            </h2>
            <DemandAccordion target="Parpol" start={6}/>

            <h2 className="font-bold text-xl mt-8">
                For the Indonesian Police (Polri)
            </h2>
            <DemandAccordion target="Polri" start={9}/>

            <h2 className="font-bold text-xl mt-8">
                For the Indonesian Military (TNI)
            </h2>
            <DemandAccordion target="TNI" start={12}/>

            <h2 className="font-bold text-xl mt-8">
                For Ministries in the Economic Sector
            </h2>
            <DemandAccordion target="Menko" start={15}/>

            <h1 className="text-3xl font-extrabold tracking-tight text-balance mt-12">
                Eight Long-Term Demands
            </h1>

            <Alert className="mt-6">
                <AlertCircleIcon/>
                <AlertTitle>
                    Due on Monday, 31 August 2025. <DaysLeftCalculate endDate="2026-08-31"/>
                </AlertTitle>
            </Alert>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <DemandInProgressYear/>
                <DemandFulfilledYear/>
            </div>



            <DemandYearAccordion target="LongTerm"/>


            <div className="mt-24 mx-auto w-fit text-xs">
                <p>Credits to <Link className="text-(--pink-color) hover:underline"
                                    href="https://www.instagram.com/kokbisa">Kok Bisa</Link> and <Link
                    className="text-(--pink-color) hover:underline" href="https://www.instagram.com/whatisupindonesia">What
                    Is Up, Indonesia?</Link> for the content.</p>
            </div>
        </div>
    );
}
