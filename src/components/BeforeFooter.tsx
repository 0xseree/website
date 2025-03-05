import { Button } from "./Button";

export const BeforeFooter = () => {
  return (
    <section className="w-full p-5 flex flex-col items-center justify-center mt-20">
      <div className="p-5 w-full md:w-[90%] rounded-xl bg-[#EDFCF4] flex items-center gap-5 justify-between md:flex-row flex-col">
        {/* <div className="w-full md:w-[80%] md:h-[500px] h-fit rounded-xl mt-5">
          <img
            src="/IMG_6191.jpeg"
            alt=""
            className="w-full h-full rounded-xl object-cover"
          />
        </div> */}

        <div className=" w-full  h-fit rounded-xl flex md:flex-row flex-col items-center justify-center">
          <div className="w-full mt-5">
            <h3 className="text-2xl font-medium text-[#182230]">Location</h3>

            <p className="text-md text-[#98A2B3] mt-2">United States & Africa</p>
          </div>

          <div className="w-full mt-5">
            <h3 className="text-2xl font-medium text-[#182230]">Contact</h3>

            <p className="text-md text-[#98A2B3] mt-2">team@seree.xyz</p>
          </div>

          <div className="w-full mt-5">
            <h3 className="text-2xl font-medium text-[#182230]">
              Still have questions?
            </h3>

            <p className="text-md text-[#98A2B3] mt-2">
              Can’t find the answer you’re looking for? Chat with our
              friendly team.
            </p>

            <div className="w-full mt-5">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};