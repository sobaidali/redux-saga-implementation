import { IMAGES, STATS } from '../constants'

//images actions
const loadImages = () => ({
    type: IMAGES.LOAD,
});

const setImages = images => ({
    type: IMAGES.LOAD_SUCCESS,
    images,
});

const setErrors = error => ({
    type: IMAGES.LOAD_FAIL,
    error,
});

//stats actions
const loadImageStats = id => ({
    type: STATS.LOAD,
    id,
})

const setImageStats = (id, downloads) => ({
    type: STATS.LOAD_SUCCESS,
    id,
    downloads,
})

const setImageStatsError = id => ({
    type: STATS.LOAD_SUCCESS,
    id,
})

export { loadImages, setImages, setErrors, loadImageStats, setImageStats, setImageStatsError };
