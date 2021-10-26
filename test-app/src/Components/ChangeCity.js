import React, { useState } from "react";
import { requests } from "../requests";
import cn from "classnames";
import Autosuggest from 'react-autosuggest';
import { ReactComponent as Clear } from "../img/icons/close.svg";
import cs from "../styles/ChangeCity.module.css";
import theme from "../styles/Theme.module.css";

const ChangeCity = (props) => {
    const [cities, setCities] = useState([]);
    const [value, setValue] = useState('');
    const [suggestions, setSuggesitons] = useState(cities);


    const onChange = (event, { newValue }) => {
        setValue(newValue);
        props.setCity(newValue)
    };

    const getCities = () => requests.getCities('/city/', (response) => {
        console.log('city >')
        setCities(response.data.data);
    })

    const changeInput = (e) => {
        setValue(e.target.value)
    }

    const clearInput = () => {
        setValue("");
    }

    const getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : cities.filter(city =>
            city.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    const getSuggestionValue = suggestion => suggestion.name;

    const renderSuggestion = suggestion => (
        <div>
            {suggestion.name}
        </div>
    )

    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggesitons(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        setSuggesitons([]);
    };

    const inputProps = {
        placeholder: 'Начните вводить город ...',
        value,
        onChange: onChange,
        onClick: getCities
    };

    /*<input className={cs.map__input} type="text" value={value} list="cities" placeholder="Начните вводить пункт ..." onClick={getCities} onChange={(e) => {changeInput(e)}}></input>
                <Clear onClick={clearInput} />*/
    return(
        <div className={cn(cs.overlay, {[cs.active]: props.active})} onClick={() => {props.setActive(false)}}>
            <div className={cs.changeCity} onClick={(e) => {e.stopPropagation()}}>
                <label className={cs.map__city}>Город</label>
                <Clear class={cn(cs.svg, {[cs.active]: value})} onClick={clearInput} />
                <Autosuggest
                    focusInputOnSuggestionClick={false}
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                    theme={theme}
                />
            </div>
        </div>
    )
}

export default ChangeCity;