const initialState = {
    npc: {att: "8", maxHp: "60", line: "NO_TEXT", name: "적C", hp: "60", xp: "10"},        
}

const BATTLE = 'BATTLE';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BATTLE':
            return {
                ...state,
                player: action.data,
                npc: action.data,
            }
        default: 
            return state;
    }
};
