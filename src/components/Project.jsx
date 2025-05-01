import React from "react";
import data from "../data.js";
import { NavLink } from "react-router-dom/cjs/react-router-dom.js";

function Project() {
  const { projectSection } = data;
  return (
    <div>
      {projectSection.map(() => (
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h1></h1>
            <p></p>
            <div>
              <button>react</button>
              <button>redux</button>
              <button>vercel</button>
            </div>
            <div>
              <NavLink to="" />
              <NavLink to="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
