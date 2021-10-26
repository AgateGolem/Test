import React, {useState} from "react";
import cn from "classnames";
import { ReactSVG } from "react-svg";
import Tesla from '../img/Tesla.jpg';
import Ferrari from '../img/Ferrari.jpg';
import Porsche from '../img/Porsche.jpg';
import GTR from '../img/GTR.jpg';
import arrowLeft from "../img/icons/arrowLeft.svg";
import arrowRight from "../img/icons/arrowRight.svg";
import slider from "../styles/Slider.module.css";

const slides = [
    {
        eachSlide: `url(${Tesla})`,
        head: 'Бесплатная парковка',
        text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
        color: 'linear-gradient(to right, #13493F, #0C7B1B)',
    },
    {
        eachSlide: `url(${Ferrari})`,
        head: 'Страховка',
        text: 'Полная страховка автомобиля',
        color: 'linear-gradient(to right, #132949, #0C7B67)',
    },
    {
        eachSlide: `url(${Porsche})`,
        head: 'Бензин',
        text: 'Полный бак на любой заправке города за наш счёт',
        color: 'linear-gradient(to right, #493013, #7B0C3B)',
    },
    {
        eachSlide: `url(${GTR})`,
        head: 'Обслуживание',
        text: 'Автомобиль проходит еженедельное ТО',
        color: 'linear-gradient(to right, #281349, #720C7B)',
    }
];

export const Slider = () => {
    const [active, setActive] = useState(0);
    const max = slides.length;

    const nextOne = () => active < max - 1 && setActive(active + 1)

    const prevOne = () => active > 0 && setActive(active - 1)

    const isActive = value => active === value && slider.active

    const setSliderStyles = () => {
        const transition = active * - 50;
        
        return {
            width: ( slides.length * 50 ) + 'vw',
            transform: 'translateX(' + transition + 'vw)'
        }
    }

    const renderSlides = () => slides.map((item, index) => (
        <div 
            className={slider.each_slide} 
            key={ index } 
            style={{ backgroundImage: item.eachSlide }}>
            <div className={slider.slider__grad}></div>
            <div 
                className={slider.slide__desc}
                key= { index }>
            <div className={slider.slide__head}>{ item.head }</div>
            <div className={slider.slide__text}>{ item.text }</div>
            <div 
            className={cn(slider.slide__button, slider.button)}
            style={{ background: item.color }}>Подробнее</div>
        </div>
        </div> 
    ));
    
    const renderDots = () => slides.map((slide, index) => ( // check index
        <li 
            className={`${isActive(index)}  ${slider.dots}`}   
            key={ index }>
                <button onClick={ () => setActive(index) }>
                    <span>&#9679;</span>
                </button>
        </li> 
    ));

    const renderArrows = () => (
        <React.Fragment>
            <button 
                type='button'
                className={cn(slider.arrows, slider.prev)} 
                onClick={ () => prevOne() } >
                <ReactSVG src={arrowLeft} />
            </button>
            <button 
                type='button'
                className={cn(slider.arrows, slider.next)} 
                onClick={ () => nextOne() } > 
                <ReactSVG src={arrowRight} />
            </button>
        </React.Fragment>
    )

    return (
        <section className={slider.slider}>
            <div 
                className={slider.wrapper} 
                style={ setSliderStyles() }>
                { renderSlides() }
                
            </div>
            
            { renderArrows() }
            <ul className={slider.dots_container}>
                { renderDots() }
            </ul>
        </section>
    );
};