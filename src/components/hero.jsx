import { useEffect, useRef } from "react";
import profilePic from "../assets/Profilepic.jpg";
export default function Herosection() {
  const texts = ["Full Stack Developer","Coffee & Code Addict", "Fast learner", "PERN Stack Developer","UI/UX Designer"];
  const textAnimate = useRef();

  useEffect(() => {
    let index = 0; // which text
    let charIndex = 0; // which character
    let deleting = false; // typing or deleting

    function typeEffect() {
      const currentText = texts[index];

      if (!deleting) {
        // typing
        textAnimate.current.innerText = currentText.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
          deleting = true;
          setTimeout(typeEffect, 1200); // wait before deleting
          return;
        }
      } else {
        // deleting
        textAnimate.current.innerText = currentText.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          deleting = false;
          index = (index + 1) % texts.length; // next text
        }
      }

      setTimeout(typeEffect, deleting ? 50 : 90); // delete fast, type slower
    }

    typeEffect();
  }, []);

  return (
    <div className="text-4xl text-white flex flex-col md:flex-row gap-4 font-normal pt-44 md:text-5xl mb-28">
      <div
        className="flex-1 flex flex-col gap-3 justify-center pl-12 flex-wrap mb-28 mt-12"
        style={{ fontFamily: "PT Mono,monospace!important" }}
      >
        <h1 className="-z-50 relative">
          Hi There! <div className="gestureAnimate">👋</div>
        </h1>
        <h1>
          I'm{" "}
          <span
            style={{ color: "#1fff00" }}
            className="font-bold text-[2.5rem]"
          >
            BEREKET GIRMA
          </span>
        </h1>

        <h1 className="text-2xl mt-12 text-[#1fff00]">
          <span ref={textAnimate}>Full Stack Developer</span>
          <div className="w-0.5 h-8 bg-white inline-block translate-y-2"></div>
        </h1>
      </div>

      <div className="flex flex-1 px-10 justify-center">
        <img
          className="rounded-full max-w-[30rem] w-full max-md:max-w-sm flex-none aspect-square min-[768px]:w-72 min-[768px]:h-72 min-[876px]:w-96 min-[876px]:h-96"
          src={profilePic}
        />
      </div>
    </div>
  );
}