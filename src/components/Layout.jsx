import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import Work from "./Work";
import SideIcon from "./SideIcon";

const Layout = () => {
  return (
    <>
      <Header />
      <SideIcon />
      <HeroSection id="home" />
      <About id="about" />
      <Work id="work" />
      <Skills id="skills" />
      <Contact id="contact" />
      {/* <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </>
  );
};

export default Layout;
