import { RiAddLargeFill } from "react-icons/ri";

function Faq({ faq }) {
  return (
    <>
      <button
        type="button"
        className="flex items-center justify-between md:w-[70%] p-5  text-gray-500 font-medium border-b border-gray-300 focus:ring-gray-200 dark:focus:ring-gray-800  dark:text-gray-400 hover:bg-gray-100 hover:text-[#222] gap-3 "
        data-accordion-target={`#${faq.id}`}
        aria-expanded="false"
        aria-controls={`${faq.id}`}
      >
        <span className="xl:text-[18px]">{faq.question}</span>
        <RiAddLargeFill className="" />
      </button>
      <div
        id={`${faq.id}`}
        className="hidden md:w-[70%] border-none p-5 bg-gray-100"
      >
        <div className=" border-gray-200 dark:border-gray-800 dark:bg-gray-900">
          <p className=" text-gray-600">{faq.answer}</p>
        </div>
      </div>
    </>
  );
}

export default Faq;
