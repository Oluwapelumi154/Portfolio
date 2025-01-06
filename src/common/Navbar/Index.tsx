import { Moon, SunDim, List, Code } from "phosphor-react";
import { useState } from "react";
// import { Link } from "react-router-dom";

const Index = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div className="bg-shade-4 z-50 fixed w-100 flex items-center justify-between h-70 px-20 md:px-8">
      <p className="gradient-text">
        <Code className="text-white" size={28} weight="bold" />
      </p>
      <div className="flex items-center gap-10">
        <p className="text-white font-600 gradient-text">
          Home
        </p>
        <p className="text-white">
          Resume
        </p>
        <p className="text-white gradient-text">
          Skills
        </p>
        <p className="text-white gradient-text">
          Contact
        </p>
        <p className="text-white gradient-text">
          Projects
        </p>
      </div>
      <div>
      {theme === "light" ? (
          <Moon
            className="text-white"
            weight="bold"
            onClick={() => setTheme("dark")}
            size={20}
          />
        ) : (
          <SunDim
            className="text-white"
            weight="bold"
            onClick={() => setTheme("light")}
            size={20}
          />
        )}
      </div>
      <div className="flex md:hidden items-center gap-4">
        {theme === "light" ? (
          <Moon
            className="text-white"
            weight="bold"
            onClick={() => setTheme("dark")}
            size={18}
          />
        ) : (
          <SunDim
            className="text-white"
            weight="bold"
            onClick={() => setTheme("light")}
            size={18}
          />
        )}
        <List className="text-white" weight="bold" size={18} />
      </div>
    </div>
  );
};

export default Index;
