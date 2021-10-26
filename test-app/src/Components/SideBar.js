import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import cn from "classnames";
import { ReactComponent as Hamburger } from "../img/icons/hamburger.svg";
import close from "../img/icons/close.svg";
import telegram from "../img/icons/telegram.svg";
import facebook from "../img/icons/facebook.svg";
import insta from "../img/icons/insta.svg";
import sideBar from "../styles/SideBar.module.css";
console.log(sideBar)

const SideBar = () => {
    const [toggle, setToggle] = useState(false);
    const [language, setLanguage] = useState('Eng')

    const toggleMenu = () => {
        setToggle(!toggle);
    }

    const changeLanguage = () => {
        if(language === 'Eng') setLanguage('Рус');
        else setLanguage('Eng');
    }

    return (
        <div>
            <div className={sideBar.menu}>
                <div className={cn(sideBar.menu__icon, sideBar.open)} onClick={toggleMenu}>
                    <Hamburger />
                </div>
                <div className={sideBar.menu__language} onClick={changeLanguage}>{ language }</div>
            </div>
            <div className={cn(sideBar.wrapp, {[sideBar.opened]:toggle})}>
                <div className={sideBar.menu__opened}>
                    <div className={sideBar.menu__icon} onClick={toggleMenu}>
                        <ReactSVG src={close}/>
                    </div>
                    <nav className={sideBar.menu__list}>
                        <a className={sideBar.link} href="#">ПАРКОВКА</a>
                        <a className={sideBar.link} href="#">СТРАХОВКА</a>
                        <a className={sideBar.link} href="#">БЕНЗИН</a>
                        <a className={sideBar.link} href="#">ОБСЛУЖИВАНИЕ</a>
                    </nav>
                    <div className={sideBar.menu__social}>
                        <div className={sideBar.social__icon}>
                            <ReactSVG src={telegram}/>
                        </div>
                        <div className={sideBar.social__icon}>
                            <ReactSVG src={facebook}/>
                        </div>
                        <div className={sideBar.social__icon}>
                            <ReactSVG src={insta}/>
                        </div>
                        <div className={cn(sideBar.menu__language, sideBar.mobile)} onClick={changeLanguage}>{ language }</div>
                    </div>
                </div>
                <div className={sideBar.slider__back}></div>
            </div>
        </div>
    )
}

export default SideBar;