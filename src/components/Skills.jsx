import { useState } from "react";

const Skills = () => {
  const [selectedSkills, setSelectedSkills] = useState("all");

  const handleSkillFilter = (value) => {
    setSelectedSkills(value);
  };

  const skillsData = [
    { id: "34826e5b", name: "HTML", category: "frontend" },
    { id: "36b7d94b", name: "CSS", category: "frontend" },
    { id: "8e546a2c", name: "Bootstrap", category: "frontend" },
    { id: "b003549e", name: "TailwindCSS", category: "frontend" },
    { id: "0656ff65", name: "JavaScript", category: "frontend" },
    { id: "5825b649", name: "React", category: "frontend" },
    { id: "ed6a531e", name: "Redux", category: "frontend" },
    { id: "5ff1881b", name: "ChakraUI", category: "frontend" },
    { id: "6480f23a", name: "MaterialUI", category: "frontend" },
    { id: "717a57ea", name: "Git", category: "frontend" },
    { id: "597b870e", name: "NodeJS", category: "backend" },
    { id: "27ec7e3d", name: "Express", category: "backend" },
    { id: "d9f2bf70", name: "MongoDB", category: "backend" },
    { id: "20aad1bc", name: "Mongoose", category: "backend" },
    { id: "893a78b8", name: "Postman", category: "backend" },
    { id: "717a57ea", name: "Git", category: "backend" },
  ];

  const filteredSkills =
    selectedSkills === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedSkills);

  return (
    <>
      <div id="skills" className="css-1cfisuf snipcss-7xyMd">
        <div className="css-0">
          <h2 className="chakra-heading css-1om66xa">
            My{" "}
            <span id="style-vyFfp" className="style-vyFfp">
              Technical
            </span>{" "}
            Skills
          </h2>
          <div className="css-16mokcj">
            <button
              type="button"
              className={`chakra-button css-1yo3mv7 ${
                selectedSkills === "all" ? "active" : ""
              }`}
              onClick={() => handleSkillFilter("all")}
              value="all"
            >
              All
            </button>
            <button
              type="button"
              value="frontend"
              className={`chakra-button css-10f5nk9 ${
                selectedSkills === "frontend" ? "active" : ""
              }`}
              onClick={() => handleSkillFilter("frontend")}
            >
              Frontend
            </button>
            <button
              type="button"
              className={`chakra-button css-10f5nk9 ${
                selectedSkills === "backend" ? "active" : ""
              }`}
              onClick={() => handleSkillFilter("backend")}
              value="backend"
            >
              Backend
            </button>
          </div>
          <div className="css-uaetf">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                className="css-gmuwbf aos-init aos-animate"
              >
                <div className="smoothHover css-ysuot2">
                  <div className="css-1qpslqa">
                    <img
                      src={`https://mohit-portfolio.vercel.app/assets/${skill.name
                        .toLowerCase()
                        .replace(/\s+/g, "")}.${skill.id}.${
                        skill.name === "ChakraUI" ||
                        skill.name === "Postman" ||
                        skill.name === "Mongoose"
                          ? "png"
                          : "svg"
                      }`}
                      className="chakra-image css-0"
                      alt={skill.name}
                    />
                  </div>
                  <p className="chakra-text css-1p4a2kb">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
