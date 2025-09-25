import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ComponentsAccordionData = [
  {
    title: "Header",
    components: [
      {
        name: "Header 1",
        icon: "",
        data: [],
      },
    ],
  },
  {
    title: "Hero",
    components: [],
  },
  {
    title: "Footer",
    components: [],
  },
];

export default function ComponentsAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {ComponentsAccordionData.map((item, i) => (
        <AccordionItem key={i} value={`${i}`}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Our flagship product combines cutting-edge technology with sleek
              design. Built with premium materials, it offers unparalleled
              performance and reliability.
            </p>
            <p>
              Key features include advanced processing capabilities, and an
              intuitive user interface designed for both beginners and experts.
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
