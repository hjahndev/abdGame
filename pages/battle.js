import React, { useRef, useState } from 'react';
import { Menu } from '/components/Menu';
import { SelectBtnDiv } from '/components/SelectBtnDiv';
import { Player } from '/components/Player';
import { useSelector } from 'react-redux';
import 'antd/dist/antd.css';

const Battle = () => {
    const battleData = useSelector((state) => state.battle);
    const selectData = battleData.select;
    const scripts = battleData.scripts;
    
    return (
    <div className="battle-script">
        <Menu />  
        <section className="description">
            <div className="battle-content">
                <div id="pre-desc">
                    {scripts !== null?
                        scripts.map((v, i)=>{
                            return <p key={i}>{v}</p>
                        })
                    :null } 
                </div> 
            </div>
            <div id="blue-dragon">
                <div className="pin"></div>
                <div className="dong-name">청룡동</div>
            </div>
            <div id="red-bird">
                <div className="pin"></div>
                <div className="dong-name">주작동</div>  
            </div>
        </section>
        <section className="player-section">
            <Player />
        </section>    
        <section className="description">
            <div className="battle-content">
                {selectData !== null ?
                selectData.selectHead
                :null}
                <SelectBtnDiv />
            </div>    
            <div id="black-tortoise">
                <div className="pin"></div>
                <div className="dong-name">현무동</div>
            </div>
            <div id="white-tiger">
                <div className="pin"></div>
                <div className="dong-name">백호동</div>  
            </div>    
        </section>
    </div>
    );
}

export default Battle;