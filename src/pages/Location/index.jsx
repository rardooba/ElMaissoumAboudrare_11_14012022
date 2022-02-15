import React from "react";
import { useParams, Navigate } from "react-router-dom";
import "./index.css";

import Gallery from "../../components/Gallery";
import Host from "../../components/Host";
import Rate from "../../components/Rate";
import Tag from "../../components/Tag";
import Dropdown from "../../components/Dropdown";

const Location = ({ data }) => {
  //* url handling + filtering of data from the id
  const params = useParams();
  //recovery data of the lodging corresponding to the id
  const dataFromId = data.filter((elt) => elt.id === params.id)[0];

  return data.some((elt) => elt.id === params.id) ? (
    <div className="location-page">
      <header>
        <Gallery images={dataFromId.pictures} />
      </header>

      <main className="main-location">
        <header className="location-header">
          <div>
            <h2>{dataFromId.title}</h2>
            <p>{dataFromId.location}</p>
            {dataFromId.tags.map((tag, index) => (
              <Tag key={index} content={tag} />
            ))}
          </div>
          <div className="location-header-host">
            <Host name={dataFromId.host.name} img={dataFromId.host.picture} />
            <Rate fill={dataFromId.rating} />
          </div>
        </header>

        <section className="location-details">
          <Dropdown title="Description">
            <p className="dropdown-list">{dataFromId.description}</p>
          </Dropdown>

          <Dropdown title="Equipements">
            <ul className="dropdown-list">
              {dataFromId.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Dropdown>
        </section>
      </main>
    </div>
  ) : (
    <Navigate to="/404" />
  );
};

export default Location;
