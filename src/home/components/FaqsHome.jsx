import { RiAddLargeFill } from "react-icons/ri";
import faqs from "../../helpers/faqs";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const FaqsHome = () => {
  const faqsMin = faqs.filter((faq, index) => index < 7);

  return (
    <section className=" pt-3 w-[100%] xl:px-10 flex flex-col gap-10">
      <h3 className="text-[25px] text-center ">Preguntas frecuentes - FAQS</h3>
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className="border-none rounded-none outline-none flex flex-col items-center w-[100%] gap-5"
      >
        {faqsMin.map((faq) => (
          <>
            <button
              type="button"
              class="flex items-center justify-between md:w-[70%] p-5  text-gray-500 font-medium border-b border-gray-300 focus:ring-gray-200 dark:focus:ring-gray-800  dark:text-gray-400 hover:bg-gray-100 hover:text-[#222] gap-3 "
              data-accordion-target={`#${faq.id}`}
              aria-expanded="false"
              aria-controls={`${faq.id}`}
            >
              <span className="xl:text-[18px]">{faq.question}</span>
              <RiAddLargeFill className="" />
            </button>
            <div
              id={`${faq.id}`}
              class="hidden md:w-[70%] border-none p-5 bg-gray-100"
            >
              <div class=" border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                <p class=" text-gray-600">{faq.answer}</p>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="w-[100%] flex justify-center items-center">
        <Link to={"/faqs"} className="bg-slate-500 flex justify-center items-center gap-3 px-15 p-5 xl:w-[10%] xl:text-[16px]">
          <span className="text-[#fff]">VER MÁS</span>{" "}
          <MdArrowForwardIos className="text-[#fff]" />
        </Link>
      </div>
    </section>
  );
};

export default FaqsHome;
