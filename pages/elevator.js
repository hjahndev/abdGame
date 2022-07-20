import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';
import { CENTER_DONG } from '../reducers';

const Elevator = () => {
    const scrollDown = useRef();
    const dispatch = useDispatch();
    const router = useRouter();
    const state = useSelector((state) => state);
    const [ status, setStatus ] = useState('start');
    
    const onClickElevatorBtn = (e) => {
        e.preventDefault(); //form submit 막음    
        let pageYOffset = 0;
        const totalHeight = document.querySelector('.wall').scrollHeight;
        const bodyHeight = document.querySelector('body').scrollHeight;
        const scrollHeight = totalHeight - bodyHeight + 200;
        scrollDown.current = setInterval(()=>{
            pageYOffset = window.pageYOffset;
            window.scrollTo(0, pageYOffset + 5);

            if(pageYOffset > scrollHeight) {
                clearInterval(scrollDown.current);
            }
        }, 20);
    }

    const onClickOpenElev = (e) => {
        dispatch({
            type: CENTER_DONG,
            data: { status: status, gameToken: state.index.gameToken }
        });
        router.push('/centerDong');  
    }

    return (
    <div className="world">
        <section id="ceiling">
            그분께서는 당신의 주변으로 빛을 퍼트리시고, 바다의 밑바닥을 빛으로 덮으십니다.
        </section>
        <section className="wall wall-back">
            <form id="start-screen">           
                <div>
                    축하합니다! 당신은 해저기지 입사 절차를 모두 마쳤습니다.
                <br /><br />프리야 쿠마리: "해저기지 인원이 된 걸 환영합니다."
                <br /><br />당신은 중앙 엘리베이터에 탑승했습니다. 
                <br /><br /> 제 4해저기지로 가는 버튼을 누르십시오.
                    <button id="elevatorBtn" onClick={onClickElevatorBtn}>B4</button>
                </div>
            </form>
        </section>
        <section className="wall wall-left"></section>
        <section className="wall wall-right"></section>
        <section className="wall wall-front wall-front-a">
            <div className="wall-content">
                <h2 className="wall-title">-50m. 제1해저기지</h2>
            </div>
        </section>
        <section className="wall wall-front wall-front-b">
            <div className="wall-content">
                <h2 className="wall-title">-200m. 제2해저기지</h2>
            </div>
        </section>
        <section className="wall wall-front wall-front-c">
            <div className="wall-content">
                <h2 className="wall-title">-1000m. 제3해저기지</h2>
            </div>
        </section>
        <section className="wall wall-front wall-front-d">
            <div className="wall-content">-3000m. 제4해저기지에 도착했습니다.
                <div><a onClick={onClickOpenElev}>"육지에서 사는 생물들은 언제나 바다를 그리워하지만 그 바닷물에 잠긴 순간 돌아갈 수 없다."</a></div>
            </div>
        </section>
    </div>
    );
}

export default Elevator;