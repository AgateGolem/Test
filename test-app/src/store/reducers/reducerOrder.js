import { SET_CITY, SET_POINT } from "../types";

const initialState = {
    city: '', point: '', model: '', color: '', dateFrom: '',
    dateTo: '', tariff: '', fuel: '', seat: '', handDrive: '',
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY:
            return { ...state, city: action.text };

        case SET_POINT: 
            return { ...state, point: action.text };

        default: 
            return state;
    }
};
