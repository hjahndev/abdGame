import axios from 'axios';
import { all, fork, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { keyframes } from 'styled-components';

function startAPI(data) {
    return axios.post(`http://52.89.23.86:9090/abd/gameSetup`, data);
}

function centerDongAPI(data) {
    return axios.post(`http://52.89.23.86:9090/abd/gamePlay`, data);
}

function jobAPI(data) {
    return axios.post(`http://52.89.23.86:9090/abd/gamePlay`, data);
}

function memberStatAPI(data) {
    return axios.post(`http://52.89.23.86:9090/abd/gameCharStat`, data);
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
function* watchCenterDong(action) {
    try {
        const result = yield call(centerDongAPI, action.data);
        yield put({
            type: 'CENTER_DONG_SUCCESS',
            data: result.data
        })
    } catch (err) {
        yield put({
            type: 'CENTER_DONG_FAILURE',
            data: err.response.data,
        })
    }
}
function* watchJob(action) {
    try {
        const result = yield call(jobAPI, action.data);
        yield put({
            type: 'JOB_SUCCESS',
            data: result.data
        })
    } catch (err) {
        yield put({
            type: 'JOB_FAILURE',
            data: err.response.data,
        })
    }
}
function* watchPlay(action) {
    try {
        const result = yield call(jobAPI, action.data);
        yield put({
            type: 'PLAY_SUCCESS',
            data: result.data
        })
    } catch (err) {
        yield put({
            type: 'PLAY_FAILURE',
            data: err.response.data,
        })
    }
}
function* watchSelect(action) {
    try {
        const result = yield call(jobAPI, action.data);
        yield put({
            type: 'SELECT_SUCCESS',
            data: result.data
        })
    } catch (err) {
        yield put({
            type: 'SELECT_FAILURE',
            data: err.response.data,
        })
    }
}
function* watchMemberStat(action) {
    try {
        const result = yield call(memberStatAPI, action.data);
        yield put({
            type: 'MEMBER_STAT_SUCCESS',
            data: result.data
        })
    } catch (err) {
        yield put({
            type: 'MEMBER_STAT_FAILURE',
            data: err.response.data,
        })
    }
}
function* watchLocation(action) {
    console.log(action);
    try {
        const result = yield call(jobAPI, action.data);
        yield put({
            type: 'LOCATION_SUCCESS',
            data: result.data
        })
    } catch (err) {
        yield put({
            type: 'LOCATION_FAILURE',
            data: err.response.data,
        })
    }
}
function* watchBattle(action) {
    console.log(action);
    try {
        const result = yield call(jobAPI, action.data);
        yield put({
            type: 'BATTLE_SUCCESS',
            data: result.data
        })
    } catch (err) {
        yield put({
            type: 'BATTLE_FAILURE',
            data: err.response.data,
        })
    }
}
export default function* rootSaga() {
    yield all([
        takeLatest('START', watchStart),
        takeLatest('CENTER_DONG', watchCenterDong),
        takeLatest('JOB', watchJob),
        takeLatest('PLAY', watchPlay),
        takeLatest('SELECT', watchSelect),
        takeLatest('MEMBER_STAT', watchMemberStat),
        takeLatest('LOCATION', watchLocation),
        takeLatest('BATTLE', watchBattle),
    ]);
}