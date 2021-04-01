import { IMAGES } from '../constants';

const imagesReducer = (state = [], action) => {
    switch (action.type) {
        case IMAGES.LOAD_SUCCESS:
            return { ...state, ...action.images };
            break;
        default:
            return state;
            break;
    }
}