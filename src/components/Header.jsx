import { useState } from "react";
import Sidebar from "./Sidebar";
// import { NavLink } from "react-router-dom";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleModal = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="scroll noselect">
      <div className="css-12r1v29 ">
        <div className="css-gmuwbf ">
          <a onClick={() => scrollToSection("home")}>
            <p className="chakra-text css-kdr0ay ">
              BH
              <span className=" style-7ci2x" id="style-7ci2x">
                ANU
              </span>
            </p>
          </a>
        </div>
        <div className="css-17xejub "></div>
        <div className="css-gmuwbf">
          <button
            type="button"
            className="chakra-button css-7yz21s "
            onClick={toggleModal}
          >
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              className="chakra-icon css-phi8gu "
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"
              ></path>
            </svg>
            <Sidebar
              isOpen={showSidebar}
              toggle={toggleModal}
              scrollToSection={scrollToSection}
            />
          </button>
          <div className="css-13dsavp ">
            <div className="nav-item smoothHover css-kfuong ">
              <a onClick={() => scrollToSection("home")}>HOME</a>
            </div>
            <div className="nav-item smoothHover css-kfuong ">
              <a onClick={() => scrollToSection("about")}>ABOUT</a>
            </div>
            <div className="nav-item smoothHover css-kfuong snipcss0-3-9-14">
              <a onClick={() => scrollToSection("work")}>WORK</a>
            </div>
            <div className="nav-item smoothHover css-kfuong snipcss0-3-9-16">
              <a onClick={() => scrollToSection("skills")}>SKILLS</a>
            </div>
            <div className="nav-item smoothHover css-kfuong snipcss0-3-9-18">
              <a onClick={() => scrollToSection("contact")}>CONTACT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
