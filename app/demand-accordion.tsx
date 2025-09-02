import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

// import from english.json
import en from "@/app/english.json"

export function DemandAccordion({target}: {target?: string}) {
    return (
        <Accordion type="single" collapsible className="w-full">
            {en.demands.map((demand, index) => (
                target && demand.target !== target ? null : (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg tabular-nums">
                        {demand.title}
                    </AccordionTrigger>
                    <AccordionContent>
                        {demand.details.map(detail => (
                            <div key={detail}>
                                <p>
                                    {detail}
                                </p>
                                <br/>
                            </div>
                        ))}
                    </AccordionContent>
                </AccordionItem>)
            ))}
        </Accordion>
    )
}