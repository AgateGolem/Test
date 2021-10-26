import React from "react";
import cn from "classnames";
import steps from "../styles/Steps.module.css";

const Steps = (props) => {

    /*<div className="steps">
                <Link to="/offer/location" style={{textDecoration: 'none'}} onClick={() => swapActiveForm(1)}><div className={`${activeStep == 1 ? 'active ' : ''}step steps__location`}>Местоположение</div></Link>
                <div className="steps__arrow">
                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L6 4.03L0 8V0Z" fill="#999999"/>
                    </svg>
                </div>
                <Link to="/offer/model" className={`${activeStep > 1 ? '' : 'disabled'}`} style={{textDecoration: 'none'}} onClick={() => swapActiveForm(2)}><div className={`${activeStep == 2 ? 'active ' : ''}step steps__model`}>Модель</div></Link>
                <div className="steps__arrow">
                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L6 4.03L0 8V0Z" fill="#999999"/>
                    </svg>
                </div>
                <Link to="/offer/additionally" className={`${activeStep > 2 ? '' : 'disabled'}`} style={{textDecoration: 'none'}} onClick={() => swapActiveForm(3)}><div className={`${activeStep == 3 ? 'active ' : ''}step steps__additionally`}>Дополнительно</div></Link>
                <div className="steps__arrow">
                    <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L6 4.03L0 8V0Z" fill="#999999"/>
                    </svg>
                </div>
                <Link to="/offer/result" className={`${activeStep > 3 ? '' : 'disabled'}`} style={{textDecoration: 'none'}} onClick={() => swapActiveForm(4)}><div className={`${activeStep == 4 ? 'active ' : ''}step steps__result`}>Итого</div></Link>
        </div> */

    return (
        <div className={cn(steps.step, {[steps.selected]: props.selected})} onClick={() => props.updateStep(props.index + 1)}>
            <span>{props.label}</span>
        </div>
    )
}
export default Steps;