import { Button } from "./Button";

export const Hero = () => {
  return (
    <section className="w-full p-5 flex items-center justify-center">
      <div className="md:w-[90%] w-full mt-20">
        <h3 className="text-center text-5xl font-medium text-[#182230]">
          We bridge international liquidity <br className="hidden md:block" /> with blockchain
        </h3>

        <p className="text-center mt-10 text-[#667085] font-light text-md">
          Upgrade to ISO20022 and enjoy instant liquidity in foreign currency.{" "}
          <br className="hidden md:block" />
        </p>

        <div className="w-full mt-10 flex items-center justify-center">
          <Button />
        </div>

        <div className="w-full flex items-center justify-center mt-5">
          <img
            className="max-w-full rounded-xl"
            src="/globe.jpeg"
            alt="Hero Section Image"
          />
        </div>
      </div>
    </section>
  );
};
