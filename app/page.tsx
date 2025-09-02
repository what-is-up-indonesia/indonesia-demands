import {DemandAccordion} from "@/app/demand-accordion";
import {Alert, AlertTitle} from "@/components/ui/alert";
import {AlarmClockCheckIcon, AlertCircleIcon} from "lucide-react";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
        <h1 className="text-(--pink-color) scroll-m-20 text-9xl font-extrabold tracking-tighter text-balance">
            17 + 8
        </h1>
        <h1 className="text-(--pink-color) scroll-m-20 text-7xl font-extrabold text-balance uppercase tracking-wide">Demands from the people</h1>
        <h1 className="text-(--green-color) scroll-m-20 text-5xl font-bold tracking-tight text-balance my-4">Transparency, Reformation, Empathy.</h1>

        <Alert variant="destructive" className="mt-8">
        <AlarmClockCheckIcon />
        <AlertTitle>
            17 demands due by Friday, 5 September 2025
        </AlertTitle>
    </Alert>

        <h2 className="font-bold text-xl mt-8">
            For President Prabowo
        </h2>
        <DemandAccordion target="Prabowo" />

        <h2 className="font-bold text-xl mt-8">
            For the People's Representative Council (DPR)
        </h2>
        <DemandAccordion target="DPR" />

        <h2 className="font-bold text-xl mt-8">
            For the Heads of Political Parties
        </h2>
        <DemandAccordion target="DPR" />

        <h2 className="font-bold text-xl mt-8">
            For the Indonesian Police (Polri)
        </h2>
        <DemandAccordion target="DPR" />

        <h2 className="font-bold text-xl mt-8">
            For the Indonesian Military (TNI)
        </h2>
        <DemandAccordion target="DPR" />

        <h2 className="font-bold text-xl mt-8">
            For Ministries in the Economic Sector
        </h2>
        <DemandAccordion target="DPR" />

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
