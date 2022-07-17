import React from 'react';

export const Players = ({npc, player}) => {
    return (
        <>
            <div className="enemy-stat">
                <div id="enemy-name">{npc.name}</div> 
                <p>체력:{npc.hp}/{npc.maxHp} 공격력:{npc.att} 경험치:{npc.xp} 아이템:</p>
            </div>    
            <div id="after-desc">
            </div>
            <div className="player-stat">
                <div id="player-name">{player.name}</div> 
                체력:{player.hp}/{player.maxHp} 정신력:{player.mp}/{player.maxMp} 공격력:{player.att} 경험치: {player.xp} 아이템:
            </div>
        </>
    );
}