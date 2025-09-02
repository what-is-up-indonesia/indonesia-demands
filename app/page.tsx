import {DemandAccordion} from "@/app/demand-accordion";
import {Alert, AlertTitle} from "@/components/ui/alert";
import {AlarmClockCheckIcon, AlertCircleIcon} from "lucide-react";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import {DemandFulfilledWeek} from "@/app/demand-fulfilled";
import {DemandFulfilledYear} from "@/app/demand-fulfilled-year";

export default function Home() {
  return (
    <div>
        <h1 className="text-(--pink-color) scroll-m-20 text-9xl font-extrabold tracking-tighter text-balance">
            17 + 8
        </h1>
        <h1 className="text-(--pink-color) scroll-m-20 text-7xl font-extrabold text-balance uppercase tracking-wide">Demands from the people</h1>
        <h1 className="text-(--green-color) scroll-m-20 text-5xl font-bold tracking-tight text-balance my-4">Transparency, Reformation, Empathy.</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <DemandFulfilledWeek />
            <DemandFulfilledYear />
        </div>


        <Alert variant="destructive" className="mt-8">
        <AlarmClockCheckIcon />
        <AlertTitle>
            17 demands due on Friday, 5 September 2025
        </AlertTitle>
    </Alert>

        <h2 className="font-bold text-xl mt-8">
            For President Prabowo
        </h2>
        <DemandAccordion target="Prabowo" />

        <h2 className="font-bold text-xl mt-8">
            For the People's Representative Council (DPR)
        </h2>
        <DemandAccordion target="DPR" start={3} />

        <h2 className="font-bold text-xl mt-8">
            For the Heads of Political Parties
        </h2>
        <DemandAccordion target="Parpol" start={6} />

        <h2 className="font-bold text-xl mt-8">
            For the Indonesian Police (Polri)
        </h2>
        <DemandAccordion target="Polri" start={8} />

        <h2 className="font-bold text-xl mt-8">
            For the Indonesian Military (TNI)
        </h2>
        <DemandAccordion target="TNI" start={10} />

        <h2 className="font-bold text-xl mt-8">
            For Ministries in the Economic Sector
        </h2>
        <DemandAccordion target="Menko" start={13} />

        <Separator className="my-8"></Separator>

        <Alert  className="mt-8">
            <AlertCircleIcon />
            <AlertTitle>
                8 demands due within a year
            </AlertTitle>
        </Alert>

        <DemandAccordion target="LongTerm" />

        <div className="mt-8 mx-auto w-fit text-sm">
            <p>Credits to <Link className="text-(--pink-color) hover:underline" href="https://www.instagram.com/kokbisa">Kok Bisa</Link> and <Link className="text-(--pink-color) hover:underline" href="https://www.instagram.com/whatisupindonesia">What Is Up, Indonesia?</Link> for the content.</p>
        </div>
    </div>
  );
}
