import { IMAGES } from '../constants'

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case IMAGES.LOAD:
            return true;
            break;
        case IMAGES.LOAD_SUCCESS:
            return false;
            break;
        case IMAGES.LOAD_FAIL:
            return false;
            break;
        default:
            return state;
            break;
    }
}