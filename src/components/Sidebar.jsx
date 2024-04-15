import "./Sidebar.css";

const Sidebar = ({ isOpen, toggle, scrollToSection }) => {
  return (
    <aside className={isOpen ? "sidebar open" : "sidebar"}>
      <button className="close-btn" onClick={toggle}>
        ❌
      </button>
      <nav>
        <ul>
          <li>
            <a onClick={() => scrollToSection("home")}>Home</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("about")}>About</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("work")}>Work</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("skills")}>Skills</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("contact")}>Contact</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
