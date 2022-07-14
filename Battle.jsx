import React, { useRef } from 'react';
import { Menu } from './components/Menu';
import { SelectBtnDiv } from './components/SelectBtnDiv';
import { Players } from './components/Players';

const selectOptions = [{value: 1, name: "공격한다"}, {value: 2, name: "동료에게 도움을 요청한다"}, {value: 3, name: "후퇴한다"}];
const player = {att: "5", hp: "50", lev: "1", maxHp: "50", maxMp: "100", mp: "100", 
name: "hj", reqdXp: "15", xp: "0"};
const npc = {att: "8", maxHp: "60", line: "NO_TEXT", name: "적C", hp: "60", xp: "10"};

const Battle = () => {
    return (
    <div class="script">
        <Menu />
        <div id="loadingImg"></div>
        <section class="description">
            <div class="battle-content">
                <select id="selectWhatToDo">
                    <option>청룡동 탈출정 확인</option>
                </select>
                <button id="selectBtn">선택</button>
                <div id="pre-desc">
                    쾅! 소리가 들리는 곳을 보니 엔지니어 O팀이 소총을 겨누고 있다.
                </div> 
            </div>
            <div id="blue-dragon">
                <div class="pin"></div>
                <div class="dong-name">청룡동</div>
            </div>
            <div id="red-bird">
                <div class="pin"></div>
                <div class="dong-name">주작동</div>  
            </div>
        </section>
        <section class="player-section">
            <Players player={player} npc={npc} />
        </section>    
        <section class="description">
            <div class="battle-content">
                {selectOptions.map((v,i)=>{
                    return (<SelectBtnDiv key={v.value} selectInfo={v}/>);
                })}
            </div>    
            <div id="black-tortoise">
                <div class="pin"></div>
                <div class="dong-name">현무동</div>
            </div>
            <div id="white-tiger">
                <div class="pin"></div>
                <div class="dong-name">백호동</div>  
            </div>    
        </section>
    </div>
    );
}

export default Battle;