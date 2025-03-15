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
            <h3 className="text-white text-xl font-medium">Why Now?</h3>

            <p className="mt-3 text-white">
              We're at a time where the traditional financial system
              is accepting blockchain technology. Our bet is that over
              the next 5 years, the financial system will be run on
              public blockchains. We're positioning ourselves to fulfill
              this demand in a safe and affordable way.
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
              Use of Public Blockchains
            </h3>
            <p className="mt-3 text-white">
              Seree is an Ethereum Validator. We have built our API and stablecoin technology on the Ethereum blockchain. We use specialized cryptography to keep our clients' data private while opening access to the world of DeFi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
