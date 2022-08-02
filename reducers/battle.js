const initialState = {
    player: null,
    npc: null,   
    select: null,    
    scripts: null, 
}

export const BATTLE = 'BATTLE';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BATTLE':
            return {
                ...state
            }
        case 'BATTLE_SUCCESS':
            return {
                ...state,
                player: action.data.player,
                npc: action.data.npc,
                select: action.data.select,
                scripts: action.data.scripts
            }    
        default: 
            return state;
    }
};

export default reducer;
