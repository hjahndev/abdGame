export const MEMBER_STAT = 'MEMBER_STAT';
export const MEMBER_STAT_VISIBLE = 'MEMBER_STAT_VISIBLE';

export const initialState = {
    isStatsModalVisible: false,
    charaterStatus: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MEMBER_STAT': 
            return {
                ...state,
            }
        case 'MEMBER_STAT_SUCCESS': 
            return {
                ...state,
                charaterStatus: action.data.charaterStatus,
            }    
        case 'MEMBER_STAT_VISIBLE':
            return {
                ...state,
                isStatsModalVisible: action.data.isStatsModalVisible,
            }
        default:
            return state;
    }
};

export default reducer;