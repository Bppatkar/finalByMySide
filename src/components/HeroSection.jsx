import { useEffect } from "react";
import Typed from "typed.js";

const HeroSection = () => {
  useEffect(() => {
    const typeData = new Typed("#style-Uqz9L", {
      strings: [
        "Full stack Developer",
        "Web Developer",
        "Front-end Developer",
        "Back-end Developer",
        "UI-UX Designer",
        "Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1500,
    });

    return () => {
      typeData.destroy();
    };
  }, []);

  return (
    <div id="home" className="css-1uqafjm snipcss-en8ai">
      <div className="css-1xpldbf">
        <div className="css-14ndof7">
          <div className="css-j7qwjs">
            <p className="chakra-text css-zx3rvi">Hello, my name is</p>
            <h2 className="chakra-heading css-15n3awy">Bhanu Pratap Patkar</h2>
            <p className="chakra-text css-b47vhd" id="animatedText">
              I'm a{" "}
              <span id="style-Uqz9L" className="style-Uqz9L">
                Full Stack Developer.
              </span>
            </p>
            <div className="css-493ori">
              <a
                className="chakra-button css-o7lr5t"
                href="Bhanu_resume.pdf"
                target="_blank"
                download="Bhanu-Resume.pdf"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        <div className="css-14trhsr">
          <div className="css-tkevr6">
            <div className="zoom css-3cp3lu">
              <img
                src="https://github.com/Bppatkar.png"
                className="zoomDelay css-1fpiv06"
                alt="Profile Pic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
