import { useState } from "react";

const Work = () => {
  const [filter, setFilter] = useState("all");

  const handleFilter = (value) => {
    let normalizedValue = value.toLowerCase();
    if (value === "HTML-CSS") {
      normalizedValue = "html, css";
    } else if (value === "MERN") {
      normalizedValue = "MongoDB, Express, React, Node";
    }
    setFilter(normalizedValue);
  };

  // Sample project data (replace with your actual project data)
  const projects = [
    {
      title: "Vpn Services (Intern Assignement)",
      stack: "React, JavaScript, Tailwind Css",
      image: "./workSection/vpn.jpg",
      description:
        "It's my Assignment project where I've used React JS to make the Landing page of VPn service website along with Tailwind CSS integration for better styling. I am also trying to make it responsive so it give better view in all devices.      ",
      links: {
        linkedin:
          "https://www.linkedin.com/posts/bhanu-pratap-patkar_frontenddeveloper-internshipproject-webdevelopment-activity-7182943442438615041-0psZ/?utm_source=share&utm_medium=member_desktop",
        website: "https://bhanu-innobytes-assignment.netlify.app/",
        github: "https://github.com/Bppatkar/InnoBytes-Services-Vpn-Assignment",
      },
    },
    {
      title: "Video Player and Uploader",
      stack: "React,  JavaScript, Chakra UI ",
      image: "./workSection/videoPlayer.jpg",
      description:
        "I created a website for playing videos that permits users to upload videos to their accounts. To style the website, I am using Chakra UI, and for ensuring the website is responsive, I am utilizing both Chakra UI and React icons, with a dual color-changing theme.",
      links: {
        linkedin:
          "https://www.linkedin.com/posts/bhanu-pratap-patkar_im-happy-to-share-this-video-play-and-upload-activity-7151797816170827776-MwB4/?utm_source=share&utm_medium=member_desktop",
        website: "https://bhanu-videoplayer-chakraui.netlify.app/",
        github: "https://github.com/Bppatkar/Video-Play-and-Upload",
      },
    },
    {
      title: "Simple Todo App",
      stack: "html, css",
      image: "./workSection/todo.jpg",
      description:
        "i read some new concept like, Concept API, useReducer, useEffect and useRef so i am practicing them and trying to make small todo app...where i can add some todo list by pressing add button.",
      links: {
        linkedin:
          "https://www.linkedin.com/posts/bhanu-pratap-patkar_im-happy-to-share-this-todo-app-project-activity-7148350530329755648-je5e/?utm_source=share&utm_medium=member_desktop",
        website: "https://bhanu-todoapp.netlify.app/",
        github: "https://github.com/Bppatkar/todoListWorking",
      },
    },
    {
      title: "Dominos Landing Page",
      stack: " React,Router-dom, html, css",
      image: "./workSection/dominos.jpg",
      description:
        "It's my practice to enhance my skill set when I am starting to learn web development.",
      links: {
        linkedin:
          "https://www.linkedin.com/posts/mohitsehrawat_reactjs-nike-nikecareers-activity-6947552300534042624-Jk75?utm_source=share&utm_medium=member_desktop",
        website: "https://bhanu-dominos-react.netlify.app/",
        github: "https://github.com/Bppatkar/dominosreact",
      },
    },
 {
      title: "Dominos Landing Page",
      stack: " React,Router-dom, html, css",
      image: "./workSection/dominos.jpg",
      description:
        "It's my practice to enhance my skill set when I am starting to learn web development.",
      links: {
        linkedin:
          "https://www.linkedin.com/posts/mohitsehrawat_reactjs-nike-nikecareers-activity-6947552300534042624-Jk75?utm_source=share&utm_medium=member_desktop",
        website: "https://bhanu-dominos-react.netlify.app/",
        github: "https://github.com/Bppatkar/dominosreact",
      },
    },
    {
      title: "HTML CSS Portfolio",
      stack: " html, css",
      image: "./workSection/port.jpg",
      description:
        "I started learning Web development firstly I learn HTML and CSS so i think I have to do practice of it so for  enhancing my skill set I make this Portfolio Project using HTML and CSS.",
      links: {
        linkedin:
          "https://www.linkedin.com/posts/bhanu-pratap-patkar_activity-7134772006469664768-qw0_/?utm_source=share&utm_medium=member_desktop",
        website: "https://bppatkar.github.io/MyPortfolio/",
        github: "https://github.com/Bppatkar/MyPortfolio",
      },
    },

    {
      title: "Music Production ",
      stack: " html, css",
      image: "./workSection/music.jpg",
      description:
        "I started learning Web development firstly I learn HTML and CSS so i think I have to do practice of it so for  enhancing my skill set I make this Music Production Landing page using HTML and CSS.",
      links: {
        linkedin:
          "https://www.linkedin.com/posts/bhanu-pratap-patkar_i-am-just-polishing-my-html-and-css-knowledge-activity-7134770864008409088-CGy_/?utm_source=share&utm_medium=member_desktop",
        website: "https://bppatkar.github.io/fullwebpage/",
        github: "https://github.com/Bppatkar/fullwebpage",
      },
    },
    {
      title: "Atomic Blog ",
      stack: "React, React-Dom, API, Tailwind CSS, html, css",
      image: "./workSection/atomic.jpg",
      description:
        "I make This Atomic Blog using Fetch API and i listed up in my webpage where we can add or deleted some blog and by using api we got 30 automatically generated blog .",
      links: {
        linkedin:
          "https://www.linkedin.com/posts/bhanu-pratap-patkar_im-happy-to-share-this-automicblog-project-activity-7159099570973560832-_0Aw/?utm_source=share&utm_medium=member_desktop",
        website: "https://bhanu-automic-blog.netlify.app/",
        github: "https://github.com/Bppatkar/AtomicBlog",
      },
    },
    {
      title: "Eat-N-Split",
      stack: "React, React-Dom, Tailwind CSS, html, css",
      image: "./workSection/Eat.jpg",
      description:
        "I am making Eat-N-Split Bill Webpage using Ract where we can add friend and friend can split that bill and they can contribute equal amount.",
      links: {
        linkedin:
          "https://www.linkedin.com/posts/bhanu-pratap-patkar_im-happy-to-share-this-eat-n-split-project-activity-7144271962918301696-_yBj/?utm_source=share&utm_medium=member_desktop",
        website: "https://bhanu-eat-n-split.netlify.app/",
        github: "https://github.com/Bppatkar/AtomicBlog",
      },
    },
    // **********************************
    // MERN
    // {
    //   title: "Node Project",
    //   stack: "MongoDB, Express, React, Node",
    //   image:
    //     "https://media.licdn.com/dms/image/D5612AQFAmIyJw8cAtQ/article-cover_image-shrink_600_2000/0/1709736375469?e=2147483647&v=beta&t=_kjF28lTDwq9RtHU6vJWsAs4C5uPwU8KchtsYXnK1T0",
    //   description:
    //     "This project demonstrates the MERN stack, including MongoDB for the database, Express and Node.js for the backend, and React for the frontend.",
    //   links: {
    //     github: "https://github.com/your-username/mern-project",
    //     website: "https://mern-project-example.com",
    //     demo: "https://mern-project-demo.com",
    //   },
    // },
    // {
    //   title: "Express Project",
    //   stack: "MongoDB, Express, React, Node",
    //   image:
    //     "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ef045d136165099.61f4450834d5e.png",
    //   description:
    //     "This project demonstrates the MERN stack, including MongoDB for the database, Express and Node.js for the backend, and React for the frontend.",
    //   links: {
    //     github: "https://github.com/your-username/mern-project",
    //     website: "https://mern-project-example.com",
    //     demo: "https://mern-project-demo.com",
    //   },
    // },
    // *************************************
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) =>
          project.stack.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div id="work" className="css-bewvnv ">
      <div className="css-0">
        <h2 className="chakra-heading css-1om66xa">
          My Creative{" "}
          <span id="style-bEAbX" className="style-bEAbX">
            Portfolio
          </span>{" "}
          Section
        </h2>
        <div className="css-16mokcj">
          <button
            type="button"
            className={`chakra-button css-1yo3mv7 ${
              filter === "all" ? "active all" : ""
            }`}
            onClick={() => handleFilter("all")}
            value="all"
          >
            All
          </button>
          <button
            type="button"
            className={`chakra-button css-i6sqe1 ${
              filter === "html, css" ? "active" : ""
            }`}
            onClick={() => handleFilter("HTML-CSS")}
            value="HTML-CSS"
          >
            HTML-CSS
          </button>
          <button
            type="button"
            className={`chakra-button css-i6sqe1 ${
              filter === "react" ? "active" : ""
            }`}
            onClick={() => handleFilter("react")}
            value="react"
          >
            React
          </button>
          <button
            type="button"
            className={`chakra-button css-i6sqe1 ${
              filter === "MongoDB, Express, React, Node" ? "active" : ""
            }`}
            onClick={() => handleFilter("MERN")}
            value="MERN"
          >
            MERN
          </button>
        </div>
        <div className="css-14l12ei">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="css-5q7czt aos-init aos-animate"
            >
              <div className="css-bco1gb">
                <img
                  src={project.image}
                  className="chakra-image css-qqv389"
                  alt={project.title}
                />
                <div className="css-0">
                  <p className="chakra-text css-dnwc39">{project.title}</p>
                </div>
                <div className="css-89rcva">
                  <p className="chakra-text css-1rp5lr2">
                    {project.description}
                  </p>
                </div>
                <div className="css-x2pnmr">
                  <p className="chakra-text css-1rp5lr2">
                    <span id={`style-${index}`} className={`style-${index}`}>
                      <b> Tech Stack</b>:{" "}
                    </span>
                    {project.stack}
                  </p>
                </div>
                <div className="css-ni3a1q">
                  <a
                    href={project.links.linkedin}
                    target="_blank"
                    className="smoothHover css-18gf87m"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 576 512"
                      focusable="false"
                      className="chakra-icon css-wmxkd2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path>
                    </svg>
                  </a>
                  <a
                    href={project.links.website}
                    target="_blank"
                    className="smoothHover css-18gf87m"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 576 512"
                      focusable="false"
                      className="chakra-icon css-wmxkd2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                    </svg>
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    className="smoothHover css-18gf87m"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 496 512"
                      focusable="false"
                      className="chakra-icon css-wmxkd2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
