import React from "react";
import Banner from "../../components/Banner";
import Dropdown from "../../components/Dropdown";

const About = ({ about }) => {
  return (
    <div className="about">
      <header>
        <Banner imgSrc="./images/about-banner.jpg" imgAlt="Landscape" />
      </header>
      <main>
        {about.map((elt) => (
          <Dropdown key={elt.id} title={elt.title}>
            <p className="dropdown-list">{elt.content}</p>
          </Dropdown>
        ))}
      </main>
    </div>
  );
};

export default About;
