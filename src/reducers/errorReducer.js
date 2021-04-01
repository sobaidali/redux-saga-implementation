import { IMAGES } from '../constants';

const errorReducer = (State = null, action) => {
    switch (action.type) {
        case IMAGES.LOAD_FAIL:
            return action.error;
            break;
        case IMAGES.load:
        case IMAGES.LOAD_SUCCESS:
            return null;
            break;
        default:
            return State;
            break;
    }
}