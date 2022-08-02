import React, { useRef } from 'react';
import { Menu } from '/components/Menu';
import { SelectBtnDiv } from '/components/SelectBtnDiv';
import { Players } from '/components/Players';
import { useSelector } from 'react-redux';
import 'antd/dist/antd.css';

const Battle = () => {
    const battleData = useSelector((state) => state.battle);
    const selectOptions = battleData.select.selectOptions;
    const scripts = battleData.scripts;
    return (
    <div className="battle-script">
        <Menu />  
        <section className="description">
            <div className="battle-content">
                <div id="pre-desc">
                    {scripts !== undefined?
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
            <Players />
        </section>    
        <section className="description">
            {battleData.selectHead}
            <div className="battle-content">
                {selectOptions.map((v,i)=>{
                    return (<SelectBtnDiv key={v.value} selectInfo={v}/>);
                })}
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