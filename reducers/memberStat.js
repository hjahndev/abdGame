export const MEMBER_STAT = 'MEMBER_STAT';
export const MEMBER_STAT_VISIBLE = 'MEMBER_STAT_VISIBLE';

export const initialState = {
    isStatsModalVisible: false,
    pmh: null,
    sgh: null,
    shr: null,
    ygy: null,
    pay: null
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
                pmh: action.data.charaterStatus['박무현'],
                sgh: action.data.charaterStatus['서지혁'],
                shr: action.data.charaterStatus['신해량'],
                ygy: action.data.charaterStatus['유금이'],
                pay: action.data.charaterStatus['백애영']
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