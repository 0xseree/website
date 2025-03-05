export const WhyEthereun = () => {
  return (
    <section
      id="why-ethereum"
      className="w-full p-5 flex flex-col items-center justify-center mt-20"
    >
      <div className="w-[90%] flex items-center justify-between flex-col md:flex-row">
        <div className="md:w-[50%] w-full">
          <h3 className="text-2xl font-medium text-[#182230]">
            We give banks immediate access to foreign currency <br /> by using
            stablecoins
          </h3>

          <p className="mt-5">
            Seree's API is compatible with the ISO20022 standard. We settle
            payments with stablecoins. This lowers the cost of foreign exchange,
            decreases settlement time, and removes the need to hold foreign
            currency to transact in it. Our mission is to maximize the efficiency
            of the global financial system.
          </p>
        </div>

        <div className="md:w-fit w-full md:mt-0 mt-5">
        </div>
      </div>

      <div className="w-[90%] flex items-center justify-center mt-5 flex-col md:flex-row gap-5">
        <div className="w-[400px] h-[530px] rounded-xl">
          <div className="w-full h-[300px] rounded-xl">
            <img
              src="/iso-image.jpeg"
              className="w-full max-w-full h-full rounded-tl-xl rounded-tr-xl"
              alt=""
            />
          </div>
          <div className="h-[230px] bg-gradient-to-b from-[#77DEAF] to-[#1AA16C] rounded-bl-xl rounded-br-xl p-4">
            <h3 className="text-white text-xl font-medium">
              ISO20022 integration
            </h3>

            <p className="mt-3 text-white">
              ISO20022 is an international standard for cross border payments
              amongst banks. We intend to integrate with this standard, making
              it easy for banks to use stablecoin technology to settle payments
              in the United States (and other countries soon).
            </p>
          </div>
        </div>

        <div className="w-[400px] h-[530px] rounded-xl">
          <div className="w-full h-[300px] rounded-xl">
            <img
              src="/2025-02-28 14.55.02.jpg"
              className="w-full max-w-full h-full rounded-tl-xl rounded-tr-xl"
              alt=""
            />
          </div>
          <div className="h-[230px] bg-gradient-to-b from-[#77DEAF] to-[#1AA16C] rounded-bl-xl rounded-br-xl p-4">
            <h3 className="text-white text-xl font-medium">Why Ethiopia?</h3>

            <p className="mt-3 text-white">
              Ethiopia is now #4 in Bitcoin hash rate. We forsee a
              crypto-friendly regulatory environment here. Also, Ethiopia just
              allowed international banks to open shop, meaning SWIFT standards
              are of utmost importance at this time.
            </p>
          </div>
        </div>

        <div className="w-[400px] h-[530px] rounded-xl">
          <div className="w-full h-[300px] rounded-xl">
            <img
              src="/ethereum.png"
              className="w-full max-w-full h-full rounded-tl-xl rounded-tr-xl"
              alt=""
            />
          </div>
          <div className="h-[230px] bg-gradient-to-b from-[#77DEAF] to-[#1AA16C] rounded-bl-xl rounded-br-xl p-4">
            <h3 className="text-white text-xl font-medium">
              Early Mover Advantage in Ethereum Validation
            </h3>

            <p className="mt-3 text-white">
              Seree is positioned to become the leading Ethereum validator in
              Ethiopia, operating one of the first large-scale restaking
              operations in the region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
