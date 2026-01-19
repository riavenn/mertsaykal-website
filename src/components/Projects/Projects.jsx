import aübt from "../../assets/aübt.jpg?as=webp&width=800";
import nisaPortfolyo from "../../assets/nisaPortfolyo.jpg?as=webp&width=800";
import sephironOtel from "../../assets/sephironOtel.jpg?as=webp&width=800";
import nismedKlinik from "../../assets/nismedKlinik.jpg?as=webp&width=800";
import adaletHukuk from "../../assets/adaletHukuk.jpg?as=webp&width=800";
import bellaVista from "../../assets/bellaVista.jpg?as=webp&width=800";

function Projects() {
  const projectsText = (
    <span className="">
      <span className="text-cyan-400">{"< "}</span>
      <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
        Featured Projects
      </span>
      <span className="text-cyan-400">{" />"}</span>
    </span>
  );

  const projects = [
    {
      image: aübt,
      title: "BTAKDENIZUNI",
      description:
        "Community Website Project for Akdeniz University Computer Society A web platform featuring community information, event updates, and promotional content for the Akdeniz University Computer Society.",
      demoUrl: "https://bt-website-navy.vercel.app/",
    },
    {
      image: sephironOtel,
      title: "SEPHIRON OTEL",
      description:
        "A high-end digital experience crafted for a premium hotel. It combines sophisticated aesthetics with a seamless UI, featuring immersive visuals and an elegant booking journey designed for the luxury traveler.",
      demoUrl: "https://sephiron-hotel.vercel.app/",
    },
    {
      image: nisaPortfolyo,
      title: "PORTFOLIO",
      description:
        "A modern, high-performance portfolio website developed for a creative professional in the digital marketing and design industry. Built with a focus on visual storytelling and seamless user experience.",
      demoUrl: "https://nisa-portfolyo.vercel.app/",
    },
    {
      image: nismedKlinik,
      title: "NISMED CLINIC",
      description:
        "A clean, modern healthcare website designed to prioritize patient trust and accessibility. Features a mobile-first interface, intuitive service navigation, and a streamlined appointment request system.",
      demoUrl: "https://healt-web.vercel.app/",
    },
    {
      image: adaletHukuk,
      title: "ADALET LAW",
      description:
        "A sophisticated and authoritative web platform designed for legal services. It focuses on clarity, professional branding, and easy access to legal expertise through a minimalist, high-trust interface.",
      demoUrl: "https://law-web-seven.vercel.app/",
    },
    {
      image: bellaVista,
      title: "BELLA VISTA",
      description:
        "A visually-driven website designed to showcase culinary excellence. Features high-quality imagery, a mobile-optimized digital menu, and an intuitive reservation system to enhance the dining experience.",
      demoUrl: "https://bellavista-restaurant.vercel.app/",
    },
  ];

  return (
    <div className="p-10 mt-10 md:pt-30 lg:px-30">
      <div className="text-xl md:text-4xl md:text-center mb-10 tracking-[1px] md:tracking-[5px]">
        {projectsText}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col p-1 bg-[var(--card-background-color)] text-white border-1 border-[var(--dark-blue)] rounded-xl shadow-cyan-400 shadow-md hover:-translate-y-2.5 transition-translate duration-500">
            <div className="w-full h-full overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover p-5 rounded-4xl"
                loading="lazy"
              />
            </div>
            <div className="px-4 pb-4 flex flex-col gap-2">
              <div className="text-white w-fit tracking-[2px]">
                {project.title}
              </div>
              <div className="text-gray-400 min-h-30">
                {project.description}
              </div>
              <div className="flex flex-col">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  className="flex items-center w-40 rounded-lg hover:text-cyan-400 transition-text duration-300">
                  View Demo
                </a>
                <div className="bg-gray-400 h-[1px] w-30"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
