import axios from 'axios';
import data from "./constants.json"

export const requests = {
    getCities: (path, successcallback, errorcallback) => {
        axios.get(data['URLServer  '] + path, data.appId)
            .then(response => {
                if(successcallback != null)
                    successcallback(response);
            })
            .catch((error) => {
                if(errorcallback != null)
                    errorcallback(error);
            })
    },

    getPoints: (town, path, successcallback, errorcallback) => {
        axios.get(data['URLServer  '] + path + town.id, data.appId)
            .then(response => {
                if(successcallback != null)
                    successcallback(response);
            })
            .catch((error) => {
                if(errorcallback != null)
                    errorcallback(error);
            })
    }
}