import React from 'react';

export const Menu = () => {
    return (
        <>
            <nav class="menu">
                <nav class="menu-link">
                    <a class="menu-item" id="stat" href="#">스탯 보기</a>
                    <a class="menu-item" id="items" href="#">아이템 보기</a>
                    <a class="menu-item" id="hint" href="#">게임 설명</a>
                    <a class="developer-information" href="#">제작자 정보</a>
                </nav>
            </nav>
            <nav class="button-nav">
                <div class="hp-bar">
                    <div class="hp pmh"></div>
                    <button class="button-character pmh"></button>
                </div>
                <div class="hp-bar">
                    <div class="hp ygy"></div>
                    <button class="button-character ygy"></button>
                </div>
                <div class="hp-bar">
                    <div class="hp shr"></div>    
                    <button class="button-character shr"></button>
                </div>
                <div class="hp-bar">
                    <div class="hp sgh"></div> 
                    <button class="button-character sgh"></button>
                </div>
                <div class="hp-bar">
                    <div class="hp pay"></div>     
                    <button class="button-character pay"></button>
                </div>    
            </nav>        
        </>
    );
}
