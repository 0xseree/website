import { Button } from "./Button";

export const BeforeFooter = () => {
  return (
    <section className="w-full p-5 flex flex-col items-center justify-center mt-20">
      <div className="p-5 w-[90%] rounded-xl bg-[#EDFCF4] flex items-center gap-5 justify-between">
        <div className="w-[80%] h-[500px] rounded-xl">
          <img
            src="/IMG_6191.jpeg"
            alt=""
            className="w-full h-full rounded-xl"
          />
        </div>

        <div className="w-[20%] h-[500px] rounded-xl flex flex-col items-center justify-center">
          <div className="w-full  mt-5">
            <h3 className="text-2xl font-medium text-[#182230]">Location</h3>

            <p className="text-md text-[#98A2B3] mt-2">Addis Ababa, Ethiopia</p>
          </div>

          <div className="w-full  mt-5">
            <h3 className="text-2xl font-medium text-[#182230]">Contact</h3>

            <p className="text-md text-[#98A2B3] mt-2">team@seree.xyz</p>
          </div>

          <div className="w-full  mt-5">
            <h3 className="text-2xl font-medium text-[#182230]">
              Still have questions?
            </h3>

            <p className="text-md text-[#98A2B3] mt-2">
              Can’t find the answer you’re looking for? Please chat to our
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
