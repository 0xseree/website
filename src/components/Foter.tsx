export const Foter = () => {
  return (
    <footer className="w-full  bg-gradient-to-b from-[#77DEAF] to-[#1AA16C] p-5 ">
      <div className="w-full flex items-center justify-center mt-10 gap-5">
        <div>
          <img className="w-[50px]" src="/seree_footer.png" alt="" />
        </div>

        <h3 className="text-white text-2xl font-bold">Seree</h3>
      </div>

      <div className="items-center gap-10 font-light text-white hidden md:flex mt-10 w-full justify-center">
          <a href="#why-ethereum">About</a>
          <a href="#team">Our Team</a>
          <a href="">FAQs</a>
        </div>

        <div className="w-full h-[1px] bg-white mt-10 rounded-full opacity-20"></div>

        <div className="flex items-center justify-center mt-10">
            <h3 className="text-white text-sm"> © 2025 Seree. All rights reserved</h3>
        </div>
    </footer>
  );
};
