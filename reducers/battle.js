const initialState = {
    player: null,
    npc: null,   
    select: null,    
    scripts: null,
    battle: null, 
    selectCode: '',
}

export const LOCATION = 'LOCATION';
export const BATTLE = 'BATTLE';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOCATION':
            return {
                ...state
            }
        case 'LOCATION_SUCCESS':
            return {
                ...state,
                player: action.data.player,
                select: action.data.select,
                scripts: action.data.scripts,
                selectCode: action.data.selectCode,
            }    
        case 'BATTLE':
            return {
                ...state
            }
        case 'BATTLE_SUCCESS':
            return {
                ...state,
                player: action.data.battle.player,
                npc: action.data.battle.npc,
                select: action.data.battle.select,
                scripts: action.data.scripts,
                battle: action.data.battle,
                selectCode: action.data.battle.selectCode,
            }    
        default: 
            return state;
    }
};

export default reducer;
