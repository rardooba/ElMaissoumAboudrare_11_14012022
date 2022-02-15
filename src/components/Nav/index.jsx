import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";


const Nav = () => {
    return (
        <nav className='main-nav'>
            <Link to="/">
                <img src="/images/logo.png" alt="Logo de l'agence Kasa"/>
            </Link>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/a-propos">À propos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;