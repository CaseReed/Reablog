import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    // screenWidth = largueur actuelle de l'écran
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

        // changeWidth change en temps réel la valeur screenWidth avec le setSreenWidth
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        // ajoute un eventListener sur la windows pour savoir la taille de l'écran en temps réel
        window.addEventListener('resize', changeWidth)

        // methode de cleanup de la function
        return () => {
            window.removeEventListener('resize', changeWidth);
        }

    }, [])

    return (
        <nav>
            {/* soit la variable toggleMenu est true OU la taille de l'écran et supérieur à 500px */}
            {(toggleMenu || screenWidth > 500) && (
                <ul className="liste">
                    <li className="items">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className="items">
                    <Link to="/ecrire">Ecrire</Link>
                    </li>
                    <li className="items">
                    <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            )}
            <button
                onClick={toggleNav}
                className="btn">BTN</button>
        </nav>
    )
}
