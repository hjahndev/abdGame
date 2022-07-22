import React from 'react';
import { useSelector } from 'react-redux';

export const Stat = () => {
    const player = useSelector((state) => state.index.player);
    
    return (
            <div className="player-stat">
                <div id="player-name">{player.name}</div> 
                체력:{player.hp}/{player.maxHp} 정신력:{player.mp}/{player.maxMp} 공격력:{player.att} 경험치: {player.xp}
            </div>
        
    );
}