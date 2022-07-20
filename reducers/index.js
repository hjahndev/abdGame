import { HYDRATE } from 'next-redux-wrapper';
import battle from './battle';
import { combineReducers } from 'redux';

export const START = 'START';
export const START_SUCCESS = 'START_SUCCESS';
export const CENTER_DONG = 'CENTER_DONG';
export const JOB = 'JOB';
export const PLAY = 'PLAY';
export const SELECT = 'SELECT';

const initialState = {
    status: '',
    gameToken: '',
    name: '',
    player: null,
    job: '',
    resultTxt: '',
    script: '',
    play: '',
    select: null,
    selectCode: '',

};

const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case 'HYDRATE':
                return { ...state, ...action.payload };
            case 'START':
                return {
                    ...state,
                    status: action.data.status,
                    name: action.data.name
                };
            case 'START_SUCCESS':
                return {
                    ...state,
                    status: action.data.status,
                    gameToken: action.data.gameToken
                } 
            case 'CENTER_DONG':
                return {
                    ...state,
                    status: action.data.status,
                    gameToken: action.data.gameToken
                }         
            case 'CENTER_DONG_SUCCESS':
                return {
                    ...state,
                    status: action.data.status,
                }     
            case 'JOB': 
                return {
                    ...state,
                    job: action.data.userInput
                }    
            case 'JOB_SUCCESS': 
                return {
                    ...state,
                    resultTxt: action.data.input.resultTxt,
                    player: action.data.player,
                    play: action.data.play
                } 
            case 'PLAY': 
                return {
                    ...state
                }  
            case 'PLAY_SUCCESS': 
                return {
                    ...state,
                    resultTxt: action.data.script,
                    player: action.data.player,
                    play: action.data.play,
                    select: action.data.select,
                    selectCode: action.data.selectCode
                }
            case 'SELECT':
                return {
                    ...state
                } 
            case 'SELECT_SUCCESS':
                return {
                    ...state,
                    resultTxt: action.data.script,
                    player: action.data.player,
                    play: action.data.play,
                    select: action.data.select,
                    selectCode: action.data.selectCode
                }                                         
            default:
                return state;    
        }
    },
    battle
});

export default rootReducer;