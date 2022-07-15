import React from 'react';

export const Menu = () => {
    return (
        <>
            <nav className="menu">
                <nav className="menu-link">
                    <a className="menu-item" id="stat" href="#">스탯 보기</a>
                    <a className="menu-item" id="items" href="#">아이템 보기</a>
                    <a className="menu-item" id="hint" href="#">게임 설명</a>
                    <a className="developer-information" href="#">제작자 정보</a>
                </nav>
            </nav>
            <nav className="button-nav">
                <div className="hp-bar">
                    <div className="hp pmh"></div>
                    <button className="button-character pmh"></button>
                </div>
                <div className="hp-bar">
                    <div className="hp ygy"></div>
                    <button className="button-character ygy"></button>
                </div>
                <div className="hp-bar">
                    <div className="hp shr"></div>    
                    <button className="button-character shr"></button>
                </div>
                <div className="hp-bar">
                    <div className="hp sgh"></div> 
                    <button className="button-character sgh"></button>
                </div>
                <div className="hp-bar">
                    <div className="hp pay"></div>     
                    <button className="button-character pay"></button>
                </div>    
            </nav>        
        </>
    );
}
