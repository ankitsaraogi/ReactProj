var axios = require('axios');

const MAIN_URL = "https://craft-demo-intuit.herokuapp.com";

export const get = function(url) {
    const complete_url = MAIN_URL + url;
    const encodedURI = window.encodeURI(complete_url);
    return axios.get(encodedURI);
}
    /*get : ,
    post: (url, payload) => {
        const complete_url = MAIN_URL + url;
        const encodedURI = window.encodeURI(complete_url);
        return axios.post(encodedURI, payload);
    }
}*/