export const MeetTheTeam = () => {
  return (
    <section id="team" className="w-full mt-20 p-5 flex items-center justify-center">
      <div className="w-[90%] p-4 bg-[#F2F4F7] rounded-xl">
        <div className="text-center">
          <h3 className="text-[#182230] text-3xl font-medium">Meet the Team</h3>
          <p className="text-md text-[#667085] mt-5">
            The Experts Behind Seree
          </p>
        </div>

        <div className="mt-10 w-full flex items-center justify-between">
          <div className="w-[200px] h-[350px] rounded-xl">
            <div className="w-full h-[200px] rounded-xl">
              <img
                src="/kokeb-solomon.jpg"
                className="w-full max-w-full h-full rounded-tl-xl rounded-tr-xl"
                alt=""
              />
            </div>
            <div className="h-[150px] bg-gradient-to-b from-[#77DEAF] to-[#1AA16C] rounded-bl-xl rounded-br-xl p-4">
              <h3 className="text-white text-xl font-medium">Kokeb Solomon</h3>

              <p className="mt-3 text-white">
                CEO,
                <br />
                Business Development
              </p>
            </div>
          </div>

          <div className="w-[200px] h-[350px] rounded-xl">
            <div className="w-full h-[200px] rounded-xl">
              <img
                src="/lance-davies.jpg"
                className="w-full max-w-full h-full rounded-tl-xl rounded-tr-xl"
                alt=""
              />
            </div>
            <div className="h-[150px] bg-gradient-to-b from-[#77DEAF] to-[#1AA16C] rounded-bl-xl rounded-br-xl p-4">
              <h3 className="text-white text-xl font-medium">Lance Davies</h3>

              <p className="mt-3 text-white">
                CTO,
                <br />
                Smart Contracts
              </p>
            </div>
          </div>

          <div className="w-[200px] h-[350px] rounded-xl">
            <div className="w-full h-[200px] rounded-xl">
              <img
                src="/ai-bunny.jpg"
                className="w-full max-w-full h-full rounded-tl-xl rounded-tr-xl"
                alt=""
              />
            </div>
            <div className="h-[150px] bg-gradient-to-b from-[#77DEAF] to-[#1AA16C] rounded-bl-xl rounded-br-xl p-4">
              <h3 className="text-white text-xl font-medium">AI Bunny</h3>

              <p className="mt-3 text-white">
                Lead Engineer,
                <br />
                Node Operations
              </p>
            </div>
          </div>

          <div className="w-[200px] h-[350px] rounded-xl">
            <div className="w-full h-[200px] rounded-xl">
              <img
                src="/zachary-coley.jpg"
                className="w-full max-w-full h-full rounded-tl-xl rounded-tr-xl"
                alt=""
              />
            </div>
            <div className="h-[150px] bg-gradient-to-b from-[#77DEAF] to-[#1AA16C] rounded-bl-xl rounded-br-xl p-4">
              <h3 className="text-white text-xl font-medium">Zachary Coley</h3>

              <p className="mt-3 text-white">
                Finance,
                <br />
                Treasury Management
              </p>
            </div>
          </div>

          <div className="w-[200px] h-[350px] rounded-xl">
            <div className="w-full h-[200px] rounded-xl">
              <img
                src="/kakai.png"
                className="w-full max-w-full h-full rounded-tl-xl rounded-tr-xl"
                alt=""
              />
            </div>
            <div className="h-[150px] bg-gradient-to-b from-[#77DEAF] to-[#1AA16C] rounded-bl-xl rounded-br-xl p-4">
              <h3 className="text-white text-xl font-medium">S. Allan Kakai</h3>

              <p className="mt-3 text-white">
                Legal,
                <br />
                Compliance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
