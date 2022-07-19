import axios from 'axios';
import { all, fork, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { keyframes } from 'styled-components';

function startAPI(data) {
    return axios.post(`http://localhost:8080/abd/gameSetup`, data);
}

function* watchStart(action) {
    try {
        const result = yield call(startAPI, action.data);
        yield put({
            type: 'START_SUCCESS',
            data: result.data
        })
    } catch (err) {
        yield put({
            type: 'START_FAILURE',
            data: err.response.data,
        })
    }
}
export default function* rootSaga() {
    yield all([
        takeEvery('START', watchStart),
    ]);
}