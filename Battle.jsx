import React, { useRef } from 'react';
import { Menu } from './components/Menu';

const Battle = () => {
    return (
    <div class="script">
        <Menu />
        <section class="description">
            <div class="battle-content">
                <select id="selectWhatToDo">
                    <option>청룡동 탈출정 확인</option>
                </select>
                <button id="selectBtn">선택</button>
                <p>쾅! 엔지니어 O팀이 소총을 들고 당신들을 공격합니다!</p>
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
            <p>삼번 체력:60 공격력:10 경험치: 0</p>
            <p>1.공격</p>
            <p>2.동료의 도움을 받는다.</p>
            <p>3.아이템 사용</p>
            <input type="text" id="action" />
            <button id="actionBtn">입력</button>
           
            <p>쯔OO</p>
            <p>체력:100 공격력:20 경험치:10 아이템:소총(공격력+30)</p>
        <section class="description">
            <div class="battle-content">
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