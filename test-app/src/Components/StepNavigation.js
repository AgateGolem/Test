import React from "react";
import Steps from "./Steps";
import steps from "../styles/Steps.module.css"

const StepNavigation = (props) => {
    return (
        <div className={steps.wrapper}>
            <div className={steps.steps}>
                {props.labelArray.map((item, index) => <Steps label={item} selected={props.currentStep === index + 1} updateStep={props.updateStep} key={index} index={index}></Steps>)}
            </div>
        </div>
    )
}

export default StepNavigation;