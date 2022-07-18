import { HYDRATE } from 'next-redux-wrapper';
import battle from './battle';
import { combineReducers } from 'redux';

export const START = 'START';

const initialState = {
    status: '',
    name: '',
    job: '',
};

export const startAction = (data) => {
    return {
        type: START,
        data,
    }
}
export const jobAction = (data) => {
    return {
        type: 'JOB',
        data,
    }
}
const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case 'HYDRATE':
                return { ...state, ...action.payload };
            case 'START':
                return {
                    ...state,
                    status: action.data,
                    name: action.data
                };
            case 'JOB': 
                return {
                    ...state,
                    job: action.data
                }    
            default:
                return state;    
        }
    },
    battle
});

export default rootReducer;