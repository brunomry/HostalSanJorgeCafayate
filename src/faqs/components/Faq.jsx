import { useState } from "react";
import { RiAddLargeFill } from "react-icons/ri";
import { FaMinus } from "react-icons/fa";

function Faq({ faq }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        type="button"
        className="w-[100%] rounded-[5px] border-t-0 md:border-s-0 md:border-r-0 md:border-b flex items-center justify-between md:w-[80%] lg:w-[70%] p-3 md:p-5  text-gray-500 font-medium border-b border-gray-300 focus:ring-gray-200 dark:focus:ring-gray-800  dark:text-gray-400 hover:bg-gray-100 hover:text-[#222] gap-3 "
        data-accordion-target={`#${faq.id}`}
        aria-expanded="false"
        aria-controls={`${faq.id}`}
        onClick={() => (visible ? setVisible(false) : setVisible(true))}
      >
        <span className="xl:text-[18px] text-start">{faq.question}</span>
        {visible ? <FaMinus /> : <RiAddLargeFill className="" />}
      </button>
      <div
        id={`${faq.id}`}
        className={`${
          visible ? "block" : "hidden"
        }  md:w-[80%] lg:w-[70%] border-none bg-slate-100 p-5 bg-gray-100"`}
      >
        <div className=" border-gray-200 dark:border-gray-800 dark:bg-gray-900">
          <p className=" text-gray-600 ">{faq.answer}</p>
        </div>
      </div>
    </>
  );
}

export default Faq;
