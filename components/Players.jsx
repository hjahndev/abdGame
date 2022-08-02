import React from 'react';

export const Players = () => {
    const player = {att: "5", hp: "50", lev: "1", maxHp: "50", maxMp: "100", mp: "100", 
    name: "hj", reqdXp: "15", xp: "0"};
    const npc = {att: "8", maxHp: "60", line: "NO_TEXT", name: "적C", hp: "60", xp: "10"};
    
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