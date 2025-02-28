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

        <div className="mt-10 w-full flex gap-5 items-center justify-center">
          <div className="w-[200px] h-[350px] rounded-xl">
            <div className="w-full h-[200px] rounded-xl">
              <img
                src="/2025-02-28 15.00.36.jpg"
                className="w-full max-w-full h-full rounded-tl-xl rounded-tr-xl"
                alt=""
              />
            </div>
            <div className="h-[150px] bg-gradient-to-b from-[#77DEAF] to-[#1AA16C] rounded-bl-xl rounded-br-xl p-4">
              <h3 className="text-white text-xl font-medium">Lance Davies</h3>

              <p className="mt-3 text-white">
                CEO,
                <br />
                Co-Founder
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
                CTO,
                <br />
                Co-Founder
              </p>
            </div>
          </div>

          <div className="w-[200px] h-[350px] rounded-xl">
            <div className="w-full h-[200px] rounded-xl">
              <img
                src="/collinsadi.jpg"
                className="w-full max-w-full h-full rounded-tl-xl rounded-tr-xl"
                alt=""
              />
            </div>
            <div className="h-[150px] bg-gradient-to-b from-[#77DEAF] to-[#1AA16C] rounded-bl-xl rounded-br-xl p-4">
              <h3 className="text-white text-xl font-medium">Collins Adi</h3>

              <p className="mt-3 text-white">
                Founding Engineer
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
                CFO,
                <br />
                Finance
              </p>
            </div>
          </div>

          <div className="w-[200px] h-[350px] rounded-xl">
            <div className="w-full h-[200px] rounded-xl">
              <img
                src="/sammy.jpg"
                className="w-full max-w-full h-full rounded-tl-xl rounded-tr-xl"
                alt=""
              />
            </div>
            <div className="h-[150px] bg-gradient-to-b from-[#77DEAF] to-[#1AA16C] rounded-bl-xl rounded-br-xl p-4">
              <h3 className="text-white text-xl font-medium">Samuel Gebrehiwet</h3>

              <p className="mt-3 text-white">
                Chief Operations Officer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
