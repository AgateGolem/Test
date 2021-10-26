import React, { useState } from "react";
import Header from '../Components/Header';
import Location from "../Components/Location"
import Model from "../Components/Model"
import StepNavigation from "../Components/StepNavigation";

const OfferPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const labelArray = ['Местоположение', 'Модель', 'Дополнительно', 'Итого']
    const updateStep = (step) => {
        setCurrentStep(step);
    }

    const renderStep = () => {
        switch (currentStep) {
            
            case 1: 
                return <Location updateStep={updateStep} currentStep={currentStep}/>
            case 2:
                break;

            case 3: 
                break;

            case 4: 
                break;

            default:
                return <Location updateStep={updateStep} currentStep={currentStep}/>
        }
    }

    return (
        <div>
            <Header />
            <StepNavigation labelArray={labelArray} currentStep={currentStep} updateStep={updateStep}></StepNavigation>
            { renderStep() }
        </div>
    )
}

export default OfferPage;