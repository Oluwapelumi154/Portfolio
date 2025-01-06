import Navbar from "../../common/Navbar/Index";
import { Fragment } from "react/jsx-runtime";
import Skills from "../Landing/Skills";
import Experience from "../Landing/Experience";
import Project from "./Project";
import Contact from "./Contact";
const Index = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="md:h-650 font-althetics px-25px py-50px bg-shade-4 md:px-120 md:py-8">
        <h1 className="gradient-text font-600 text-35 md:text-50 text-center">
          Hi, I'm Orebayo Oluwapelumi
        </h1>
        <p className="text-shade-2 mt-20 md:text-18">
          A passionate and results-driven software engineer with 4 years of
          experience specializing in React, Angular, and Node.js. Throughout my
          career, I've had the opportunity to work on a diverse range of
          projects, building scalable and efficient web applications from the
          ground up. I take pride in crafting clean, maintainable, and
          responsive user interfaces using React and Angular, while ensuring
          optimal performance and a seamless user experience. On the backend,
          I'm experienced in leveraging Node.js to create fast and reliable
          server-side solutions. I’m always excited to learn new technologies,
          optimize workflows, and collaborate with teams to build impactful
          solutions. I strive to stay updated with the latest trends in the tech
          industry, ensuring that the applications I build are not only
          functional but also future-proof. When I'm not coding, I enjoy
          exploring new challenges, improving my skills, and contributing to
          open-source projects.
        </p>
      </div>
      <Skills/>
      <Experience/>
      <Project/>
      <Contact/>
    </Fragment>
  );
};

export default Index;
