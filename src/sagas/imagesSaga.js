import { takeEvery, select, call, put } from "redux-saga/effects";

import { fetchImages } from "../api";
import { IMAGES } from '../constants';
import { setImages, setErrors } from '../actions';

const getPage = state => state.nextPage;

function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (err) {
        //dispatch error 
        yield put(setErrors(err.toString()));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}