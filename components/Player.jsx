import React from 'react';
import { useSelector } from 'react-redux';

export const Player = () => {
    const battleData = useSelector((state) => state.battle);
    return (
        <>
        {battleData.battle !== null?
            battleData.battle.npc !== undefined?
            <>
                <div className="enemy-stat">
                    <div id="enemy-name">{battleData.npc.name}</div> 
                    <p>체력:{battleData.npc.hp}/{battleData.npc.maxHp} 공격력:{battleData.npc.att} 경험치:{battleData.npc.xp} 아이템:</p>
                </div>
                <div id="after-desc">
                </div>
                <div className="player-stat">
                    <div id="player-name">{battleData.player.name}</div> 
                    체력:{battleData.player.hp}/{battleData.player.maxHp} 정신력:{battleData.player.mp}/{battleData.player.maxMp} 공격력:{battleData.player.att} 경험치: {battleData.player.xp} 아이템:
                </div>
            </>
            :<>
                <div id="after-desc">
                </div>
                <div className="player-stat">
                    <div id="player-name">{battleData.player.name}</div> 
                    체력:{battleData.player.hp}/{battleData.player.maxHp} 정신력:{battleData.player.mp}/{battleData.player.maxMp} 공격력:{battleData.player.att} 경험치: {battleData.player.xp} 아이템:
                </div>
            </>
        :null}
        </>
    );
}