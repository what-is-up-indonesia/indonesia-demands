import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

// import from english.json
import en from "@/app/(frontend)/english.json"
import {Badge} from "@/components/ui/badge";

function statusToVariant(status: string) {
    switch (status) {
        case "Unfulfilled":
            return "destructive"
        case "In Progress":
            return "default"
        case "Fulfilled":
            return "default"
        default:
            return "default"
    }
}

function statusToClassName(status: string) {
    switch (status) {
        case "Unfulfilled":
            return ""
        case "In Progress":
            return "bg-yellow-100 text-yellow-800"
        case "Fulfilled":
            return "bg-green-100 text-green-800"
        default:
            return ""
    }
}

export function DemandAccordion({target, start = 1}: { target?: string; start?: number }) {
        return (
            <Accordion type="single" collapsible className="w-auto" asChild>
                <ol className="list-decimal leading-zero-list ml-9 text-lg" start={start}>
                    {en.demands.map((demand, index) => (
                        target && demand.target !== target ? null : (
                            <AccordionItem value={`item-${index}`} key={index} asChild>
                                <li>
                                    <AccordionTrigger className="text-lg tabular-nums">
                                        <span><h1>{demand.title}</h1><Badge className={statusToClassName(demand.status)} variant={statusToVariant(demand.status)}>{demand.status}</Badge></span>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {demand.details.map((detail, index) => (
                                            <div key={detail} className={index > 0 ? "mt-4" : ""}>
                                                <p className="hyphens-auto">
                                                    {detail}
                                                </p>
                                            </div>
                                        ))}
                                    </AccordionContent>
                                </li>
                            </AccordionItem>)
                    ))}
                </ol>
            </Accordion>
        )
    }