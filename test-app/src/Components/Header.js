import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { ReactSVG } from "react-svg";
import ChangeCity from "./ChangeCity";
import map from "../img/icons/map.svg";
import header from "../styles/Header.module.css";

const Header = () => {
    const [active, setActive] = useState(false)
    const [city, setCity] = useState('Ульяновск')
    const updateCity = (city) => {
        if(city) setCity(city)
        else setCity('Ульяновск')
    }

    console.log(active)
    return (
        <div className={header.wrapper}>
            <div className={header.header}>
                <Link to='/' style={{textDecoration: 'none'}}><div className={header.header__logo}>
                    Need for drive
                </div></Link>
                <div className={header.header__map}>
                    <div className={header.map__name} onClick={() => setActive(true)}>
                        <ReactSVG src={map} />
                        <div className={header.city__name}>{city}</div>
                    </div>
                </div>
                <ChangeCity active={active} setActive={setActive} setCity={updateCity} />
            </div>
        </div>
    )
}

export default Header;