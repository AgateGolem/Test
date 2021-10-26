import React, { useState } from "react";
import cn from "classnames";
import { YMaps, Map } from 'react-yandex-maps';
import { useDispatch, useSelector } from 'react-redux';
import { setCity, setPoint } from "../store/actions";
import { requests } from "../requests";
import Autosuggest from 'react-autosuggest';
import { ReactComponent as Arrow } from "../img/icons/arrowUp.svg";
import { ReactComponent as Clear } from "../img/icons/close.svg";
import location from "../styles/Location.module.css";
import theme from "../styles/Theme.module.css";

const Location = (props) => {
    const [cities, setCities] = useState([]);
    const [points, setPoints] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [cityValue, setCityValue] = useState('');
    const [pointValue, setPointValue] = useState('');
    const [citySuggestions, setCitySuggesitons] = useState(cities);
    const [pointSuggestions, setPointSuggesitons] = useState([points]);
    const dispatch = useDispatch();

    const toggleOrder = () => {
        setToggle(!toggle);
    }

    const nameCity = useSelector(state => {
        const { orderReducer } = state;
        return orderReducer.city;
    })
    const namePoint = useSelector(state => {
        const { orderReducer } = state;
        return orderReducer.point;
    })

    const getCities = () => requests.getCities('/city', (response) =>{
        setCities(response.data.data);
    })

    const getPoints = () => {
        const town = cities.find(el => el.name === cityValue);
        try{
            requests.getPoints(town, '/point?cityId=', (response) => {
                setPoints(response.data.data)
            });
        }
        catch {
            alert("Укажите город")
        }
        
    }

    const clearCityInput = () => {
        setCityValue("");
        dispatch(setCity(""));
    }

    const clearPointInput = () => {
        setPointValue("");
        dispatch(setPoint(""));
    }

    const onChangeCity = (event, { newValue }) => {
        setCityValue(newValue);
    };

    const onChangePoint = (event, { newValue }) => {
        setPointValue(newValue);
    };

    const getCitySuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : cities.filter(city =>
            city.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    const getPointSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : points.filter(point =>
            point.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    const getCitySuggestionValue = citySuggestion => citySuggestion.name;

    const getPointSuggestionValue = pointSuggestion => pointSuggestion.name;

    const sendCity = (cityName) => {
        dispatch(setCity(cityName));
    }

    const sendPoint = (pointName) => {
        dispatch(setPoint(pointName));
    }

    const renderCitySuggestion = citySuggestion => (
        <div onClick={() => sendCity(citySuggestion.name)}>
            {citySuggestion.name}
        </div>
    )

    const renderPointSuggestion = pointSuggestion => (
        <div onClick={() => sendPoint(pointSuggestion.name)}>
            {pointSuggestion.name}
        </div>
    )

    const onCitySuggestionsFetchRequested = ({ value }) => {
        setCitySuggesitons(getCitySuggestions(value));
    };

    const onPointSuggestionsFetchRequested = ({ value }) => {
        setPointSuggesitons(getPointSuggestions(value));
    };

    const onCitySuggestionsClearRequested = () => {
        setCitySuggesitons([]);
    };

    const onPointSuggestionsClearRequested = () => {
        setPointSuggesitons([]);
    };

    const inputPropsCity = {
        placeholder: 'Начните вводить город ...',
        value: cityValue,
        onChange: onChangeCity,
        onClick: getCities
    };

    const inputPropsPoint = {
        placeholder: 'Начните вводить пункт ...',
        value: namePoint,
        onChange: onChangePoint,
        onClick: getPoints,
        disabled: !nameCity
    };

    /* 
        <label>Город</label>
                            <input type="text" className={location.input} list="towns" onClick={getCities} onChange={handleChangeCity}></input>
                            <datalist id="towns">{citiesList()}</datalist>

                            <label>Пункт выдачи</label>
                            <input type="text" className={location.input} list="points" onClick={getPoints} onChange={handleChangePoint}></input>
                            <datalist id="points">{pointsList()}</datalist>
    */
    return (
        <div className={location.wrapper}>
            <div className={location.main}>
                <div className={location.left}>
                    <div className={location.inputs}>
                        <div className={location.inputs__city}>
                            <label>Город</label>
                            <Autosuggest
                                id="city"
                                focusInputOnSuggestionClick={false}
                                suggestions={citySuggestions}
                                onSuggestionsFetchRequested={onCitySuggestionsFetchRequested}
                                onSuggestionsClearRequested={onCitySuggestionsClearRequested}
                                getSuggestionValue={getCitySuggestionValue}
                                renderSuggestion={renderCitySuggestion}
                                inputProps={inputPropsCity}
                                theme={theme}
                            />
                            <Clear class={cn(location.svg, {[location.active]: cityValue})} onClick={clearCityInput} />
                        </div>
                        <div className={location.inputs__point}>
                            <label>Пункт выдачи</label>
                            <Autosuggest
                                id="point"
                                focusInputOnSuggestionClick={false}
                                suggestions={pointSuggestions}
                                onSuggestionsFetchRequested={onPointSuggestionsFetchRequested}
                                onSuggestionsClearRequested={onPointSuggestionsClearRequested}
                                getSuggestionValue={getPointSuggestionValue}
                                renderSuggestion={renderPointSuggestion}
                                inputProps={inputPropsPoint}
                                theme={theme}
                            />
                            <Clear class={cn(location.svg, {[location.active]: pointValue})} onClick={clearPointInput} />
                        </div>
                    </div>
                <div className={location.map}>
                    <label>Выбрать на карте:</label>
                    <div className={location.map__yandex}>
                        <YMaps>
                            <Map width='90%' height='350px' defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
                        </YMaps>
                    </div>
                </div>
            </div>
                <div className={location.border}>
                    <div className={cn(location.arrowWrapp, {[location.open] : toggle})} onClick={toggleOrder}>
                        <Arrow />
                    </div>
                    <div className={cn(location.order, {[location.open] : toggle})}>
                        <div className={location.order__wrapp}>
                            <div className={location.order__desc}>
                                <div className={location.order__head}>Ваш заказ:</div>
                                <div className={cn(location.order__point, {[location.openDesc] : toggle})}>
                                    <div className={location.point__name}>Пункт выдачи</div>
                                    <div className={location.point__address}>{namePoint}</div>
                                </div>
                                <div className={cn(location.order__pricename, {[location.openDesc] : toggle})}>Цена:<p className={location.order__price}>от 8 000 до 12 000₽</p></div>
                            </div>
                            <div className={cn({[location.active]:namePoint}, location.order__button)} onClick={() => props.updateStep(props.currentStep + 1)}>Выбрать модель</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location;