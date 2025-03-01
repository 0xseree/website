import FAQs from "./FAQs";

export const FAQSection = () => {
  return (
    <section id="faq" className="w-full p-5 flex flex-col items-center justify-center mt-20">
      <div className="text-center">
        <h3 className="text-2xl font-medium text-[#182230]">
          Frequently asked questions
        </h3>
        <p className="text-md text-[#98A2B3] mt-3">
          Everything you need to know about our product and billing.
        </p>
      </div>

      <div className="md:w-[90%] w-full mt-10">
        <FAQs />
      </div>
    </section>
  );
};
