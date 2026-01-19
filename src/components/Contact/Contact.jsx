import SocialLinks from "../SocialLinks/SocialLinks";

function Contact() {
  return (
    <div className="p-10 md:pt-30 md:px-30 flex justify-center">
      <div className="flex flex-col md:w-250 p-10 gap-5 items-center shadow-lg shadow-cyan-400 bg-[var(--card-background-color)] rounded-lg">
        <div className="text-2xl md:text-4xl text-center bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
          GET IN TOUCH
        </div>
        <div className="text-md md:text-lg text-white text-center md:w-100">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out
          through any of the channels below!
        </div>
        <SocialLinks />
      </div>
    </div>
  );
}

export default Contact;
