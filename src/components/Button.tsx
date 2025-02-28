import { MdArrowOutward } from "react-icons/md";

export const Button = () => {
  return (
    <a className="" href="">
      <div className="border-2 bg-[#D4F7E3] border-[#1AA16C] rounded-full flex items-center justify-between w-fit">
        <div className="px-3  rounded-full">
          <h3 className="text-[#1AA16C] font-medium">Get In Touch</h3>
        </div>

        <div className="w-10 h-10 bg-[#1AA16C] rounded-full flex items-center justify-center">
          <span className="text-white text-2xl">
            <MdArrowOutward />
          </span>
        </div>
      </div>
    </a>
  );
};
