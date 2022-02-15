import React, { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import About from "../pages/About";
import Error from "../pages/404";
import Home from "../pages/Home";
import Location from "../pages/Location";
import { about } from "../api/data-about";
import "./index.css";

/**
 * Router management
 * @returns {JSX} App Pages
 */
const App = () => {
  //Data State
  const [getData, setGetData] = useState([]);
  //Loading data verif
  const [isLoaded, setIsLoaded] = useState(false);
  //if data not loaded return error message 
  const [isError, setIsError] = useState();

  //* FETCH DATA
  useEffect(() => {
    fetch("/api/kasaData.json")
      .then((res) => res.json())
      .then((data) => {
        setGetData(data);
        setIsLoaded(true);
      })
      .catch((error) => setIsError(error));
  }, []);

  return (
    <div className="app">
      <Nav />
      {isLoaded ? (
        <Routes>
          <Route path="/" element={<Home data={getData} />} />
          <Route path="/a-propos" element={<About about={about} />} />
          <Route path="/location/:id" element={<Location data={getData} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      ) : (
        <>
          {isError ? (
            `Une erreur rencontrée : ${isError}`
          ) : (
            <div>Chargement des données en cours...</div>
          )}
        </>
      )}

      <Footer />
    </div>
  );
};

export default App;
