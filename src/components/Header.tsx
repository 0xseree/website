import { Button } from "./Button";

export const Header = () => {
  return (
    <header className="w-full flex items-center justify-center">
      <div className="w-[90%] flex items-center justify-between py-4">
        <div>
          {/* <h3 className="text-[#1AA16C] text-2xl font-bold">Seree</h3> */}

          <img
            src="/New Logo Transparent.png"
            className="w-[70px] h-[70px]"
            alt=""
          />
        </div>

        <div className="items-center gap-4 font-medium text-[#667085] hidden md:flex">
          <a href="#why-ethereum">About</a>
          <a href="#team">Our Team</a>
          <a href="#faq">FAQs</a>
        </div>

        <div>
          <Button />
        </div>
      </div>
    </header>
  );
};
