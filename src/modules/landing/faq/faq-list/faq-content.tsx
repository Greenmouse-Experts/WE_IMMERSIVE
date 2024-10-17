import { useState } from "react";
import { faqData } from "../../../../components/hard-data/dummy";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const FaqContent = () => {
  const [open, setOpen] = useState<number>(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-3 gap-y-6 items-start">
        {faqData.map((item, index) => (
          <Accordion open={open === index + 1}>
            <AccordionHeader
              className="border-none rounded-[20px] bg-[#F7F8FD] py-6 pl-4 px-3"
              onClick={() => handleOpen(index + 1)}
            >
              <div className="flex justify-between items-center w-full">
                <p className="!text-black unbound fw-400 fs-600 pl-3">
                  {" "}
                  {item.question}
                </p>
                <MdOutlineKeyboardArrowDown />
              </div>
            </AccordionHeader>
            <AccordionBody>{item.answer}</AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FaqContent;
