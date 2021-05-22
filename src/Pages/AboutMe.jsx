import React from "react";
import AboutMe from "../components/AboutMe/AboutMe"
import {name,info,links,img} from "../utils/info.json"

export default function About() {
  return (
    <div>
      <AboutMe name={name} info={info} links={links} img={img} />
    </div>
  );
}
