import {takeEvery, call, put, select} from 'redux-saga/effects';
import {EXAMPLE} from "./consts";

function *exampleSaga({}) {
    return ;
}

export default function* defaultSaga() {
    yield takeEvery(EXAMPLE, exampleSaga());
}