import axios from "axios";

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
const url = 'https://api.unsplash.com/photos/?client_id='

const fetchImages = async page => {
    try {
        var { data } = await axios.get(`${url}${key}&per_page=36&page=${page}`);

        return data;
    } catch (err) {
        console.log('This is error: ', err);
        return err;
    }
}

const fetchImageStats = async id => {
    try {
        var { data } = await axios.get(`${url}${id}/statistics${key}`);

        return data;
    } catch (err) {
        console.log('This is error:', err)
        return err;
    }
}

export { fetchImages, fetchImageStats };