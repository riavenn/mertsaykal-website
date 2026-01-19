import React, { useEffect, useState } from "react";
import headerImage from "../../../public/images/headerImage.jpg?as=webp&width=800";
import SocialLinks from "../SocialLinks/SocialLinks";

function TypeWriter() {
  const titles = React.useMemo(
    () => [
      "Front-End Developer",
      "React Developer",
      "JavaScript Developer",
      "TypeScript Developer",
    ],
    [],
  );
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 100;
  const deletingSpeed = 100;
  const delaySpeed = 1500;

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1),
      );

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), delaySpeed);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, titles, titleIndex]);

  return <span>{currentText}</span>;
}

function Header() {
  const devCode = `{
        name: "Mert",
        age: 26,
        city: "Antalya"
    };`;

  return (
    <div className="flex flex-col px-5 py-10 md:p-50 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-50 h-50 md:w-90 md:h-90 bg-cyan-400 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="flex flex-col lg:flex-row justify-center text-white md:gap-40 py-10">
        <div className="flex flex-col gap-5 items-center relative">
          <div className="">
            <img
              src={headerImage}
              alt="Mert Saykal"
              className="w-50 h-50 md:w-85 md:h-85 rounded-full border-4 border-gray-800 object-cover p-1"
            />
          </div>
          <div className="hidden md:block flex flex-col bg-white/10 backdrop-blur-md gap-3 border-2 border-white/20 shadow-xl p-3 rounded-lg absolute -bottom-30 right-5 md:-bottom-15 md:-right-20 z-999">
            <div className="flex gap-1">
              <div className="bg-red-400 w-3 h-3 rounded-full"></div>
              <div className="bg-yellow-400 w-3 h-3 rounded-full"></div>
              <div className="bg-green-400 w-3 h-3 rounded-full"></div>
            </div>
            <pre className="">
              <span className="text-blue-400">const dev = </span>
              <code className="">{devCode}</code>
            </pre>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 md-align-start gap-6 md:gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-2xl md:text-3xl md:text-5xl tracking-[1px] w-full">
              <h1>Mert Saykal</h1>
            </div>
          </div>
          <div className="text-xl md:text-2xl text-center min-h-8">
            <h2 className="w-full bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
              <TypeWriter />
            </h2>
          </div>
          <div className="md:text-lg text-center text-gray-400 md:w-100">
            I am a Front-End Developer who designs and builds modern, elegant,
            and user-friendly websites. Using innovative technologies, I provide
            solutions that best represent your brand's digital presence.
          </div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Header;
