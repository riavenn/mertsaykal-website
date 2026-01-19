import { FaCircle } from "react-icons/fa";

function TimeLine() {
  const education = (
    <div className="flex flex-col gap-2 w-60  md:w-100">
      <div className="text-[var(--primary-color)] mb-1">Education</div>
      <div className="text-lg">Akdeniz University</div>
      <div className="text-md md:wd-100">Management Information Systems</div>
      <div className="text-sm italic">September 2020 - June 2025</div>
      <div className="text-sm italic">GNO: 3.45</div>
    </div>
  );

  const intership = (
    <div className="flex flex-col gap-2 w-60 md:w-100">
      <div className="text-[var(--primary-color)] mb-1">Experience</div>
      <div className="text-lg">Teknodev</div>
      <div className="text-md">Front-End Developer Intern</div>
      <div className="text-sm italic">Feb 2025 - May 2025</div>
    </div>
  );

  const freelance = (
    <div className="flex flex-col gap-2 w-60 md:w-100">
      <div className="text-[var(--primary-color)] mb-1">Experience</div>
      <div className="text-lg">Freelancer</div>
      <div className="text-md">Front-End Developer</div>
      <div className="text-sm italic">June 2025 - Present</div>
    </div>
  );

  const timeLineText = (
    <span className="">
      <span className="text-cyan-400">{"< "}</span>
      <span className="text-white">Education & Experiences</span>
      <span className="text-cyan-400">{" />"}</span>
    </span>
  );

  return (
    <div className="p-10 mt-10 md:pb-30">
      <div className="text-xl md:text-4xl text-center mb-10 tracking-[1px] md:tracking-[5px]">
        {timeLineText}
      </div>
      <div className="flex items-center md:justify-center ">
        <div className="bg-gray-800 h-175 md:h-150 w-1 relative">
          <div className="">
            <div className="text-white text-xl absolute left-1/2 -translate-x-1/2 ">
              <FaCircle />
            </div>
            <div className="flex items-center text-white text-xl md:w-100 h-fit absolute left-10 shadow-lg shadow-cyan-400 p-5 rounded-lg bg-[var(--card-background-color)]">
              {education}
            </div>
          </div>
          <div className="absolute top-[40%]">
            <div className="text-white text-xl absolute left-1/2 -translate-x-1/2">
              <FaCircle />
            </div>
            <div className="flex items-center text-white text-xl md:w-100 h-fit absolute left-10 md:-left-110 shadow-lg shadow-cyan-400 p-5 rounded-lg bg-[var(--card-background-color)]">
              {intership}
            </div>
          </div>
          <div className="absolute top-[80%]">
            <div className="text-white text-xl absolute left-1/2 -translate-x-1/2 ">
              <FaCircle />
            </div>
            <div className="flex items-center text-white text-xl md:w-100 h-fit absolute left-10 shadow-lg shadow-cyan-400 p-5 rounded-lg bg-[var(--card-background-color)]">
              {freelance}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeLine;
