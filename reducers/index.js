import { HYDRATE } from 'next-redux-wrapper';
import memberStat from './memberStat';
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
    scripts: null,
    input: null,
    inputVisible: false,
    play: '',
    select: null,
    selectCode: '',
    day: 0,
    sceneStatus: '',
    sceneInfo: ''
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
                    gameToken: action.data.gameToken,
                    scripts: ['']
                }         
            case 'CENTER_DONG_SUCCESS':
                return {
                    ...state,
                    status: action.data.status,
                    scripts: action.data.scripts,
                    input: action.data.input,
                    play: action.data.play,
                    day: action.data.day
                }     
            case 'JOB': 
                return {
                    ...state,
                    job: action.data.userInput
                }    
            case 'JOB_SUCCESS': 
                return {
                    ...state,
                    scripts: action.data.scripts,
                    player: action.data.player,
                    play: '',
                    sceneStatus: action.data.sceneStatus
                } 
            case 'PLAY': 
                return {
                    ...state
                }  
            case 'PLAY_SUCCESS': 
                return {
                    ...state,
                    scripts: action.data.scripts,
                    player: action.data.player,
                    play: action.data.play,
                    select: action.data.select,
                    selectCode: action.data.selectCode,
                    sceneStatus: action.data.sceneStatus,
                    day: action.data.day,
                    sceneInfo: action.data.sceneInfo,
                    inputVisible: false,
                }
            case 'SELECT':
                return {
                    ...state
                } 
            case 'SELECT_SUCCESS':
                let isInputVisible = true;
                if(action.data.sceneStatus === 'end'){
                    isInputVisible = false
                }
                return {
                    ...state,
                    scripts: action.data.scripts,
                    player: action.data.player,
                    play: action.data.play,
                    select: action.data.select,
                    selectCode: action.data.selectCode,
                    sceneStatus: action.data.sceneStatus,
                    inputVisible: isInputVisible,
                }                                         
            default:
                return state;    
        }
    },
    battle,
    memberStat
});

export default rootReducer;