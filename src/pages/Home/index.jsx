import React from "react";
import Banner from "../../components/Banner";
import Thumb from "../../components/Thumb";
import "./index.css";

const Home = ({ data }) => {
  return (
    <div className="home">
      <header className="main-header">
        <Banner
          imgContent="Chez vous, partout et ailleurs"
          imgSrc="./images/home-banner.jpg"
          imgAlt="Paysage"
        />
      </header>
      <main className="main-content">
        {data.map((elt) => (
          <article key={elt.id} className="location-elt">
            <Thumb id={elt.id} title={elt.title} src={elt.cover} />
          </article>
        ))}
      </main>
    </div>
  );
};

export default Home;
