import { SET_CITY, SET_POINT } from "./types"

export const setCity = (text) => {
    return {
        type: SET_CITY,
        text
    }
}

export const setPoint = (text) => {
    return {
        type: SET_POINT,
        text
    }
}