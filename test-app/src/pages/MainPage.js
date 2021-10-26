import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import {Slider} from "../Components/Slider";
import ChangeCity from "../Components/ChangeCity";
import map from "../img/icons/map.svg"
import mainpage  from "../styles/MainPage.module.css"

console.log(mainpage)

const MainPage = () => {
    const [active, setActive] = useState(false)
    const [city, setCity] = useState('Ульяновск')
    const updateCity = (city) => {
        if(city) setCity(city)
        else setCity('Ульяновск')
    }

    return (
        <div>
            <div className={mainpage.header}>
                <Link to='/' style={{textDecoration: 'none'}}><div className={mainpage.header__logo}>
                    Need for drive
                </div></Link>
                <div className={mainpage.header__map}>
                    <div className={mainpage.map__name} onClick={() => setActive(true)}>
                        <ReactSVG src={map} />
                        <div className={mainpage.city__name}>{city}</div>
                    </div>
                    <ChangeCity active={active} setActive={setActive} setCity={updateCity} />
                </div>
            </div>
            <div className={mainpage.cont}>
                <div className={mainpage.information}>
                    <div className={mainpage.content}>
                        <h1 className={mainpage.content__name}>Каршеринг</h1>
                        <h1 className={cn(mainpage.content__name, mainpage.content__name_colorized)}>Need for drive</h1>
                        <p className={mainpage.content__description}>Поминутная аренда авто твоего города</p>
                        <Link to={"/offer/location"} style={{textDecoration: 'none'}}>    
                            <div className={cn(mainpage.button, mainpage.content__button)}>
                                Забронировать
                            </div>
                        </Link>
                    </div>
                    <div className={mainpage.footer}>
                        <p className={mainpage.footer__license}>2016-2019 "Need for drive"</p>
                        <p className={mainpage.footer__phone}>8 (495) 234-22-44</p>
                    </div>
                </div>
                <Slider />
            </div>
        </div>
    )
}

export default MainPage;