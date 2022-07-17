import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    name: '',
    job: '',
};

export const startAction = (data) => {
    return {
        type: 'START',
        data,
    }
}
export const jobAction = (data) => {
    return {
        type: 'JOB',
        data,
    }
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HYDRATE':
            return { ...state, ...action.payload };
        case 'START':
            return {
                ...state,
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
};

export default rootReducer;