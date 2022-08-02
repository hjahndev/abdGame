import React, { useState, useRef, useEffect } from 'react';
import Router,{ useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { BATTLE } from '../reducers/battle';

const Intro = () => {
    const [script, setScript] = useState(`다음날 아침, 나는 누군가 깨우는 소리에 눈을 떴다.`);
    const scriptArr = [
        `"일어나세요! 지금 당장 도망쳐야 합니다! 물이 새고 있어요!"`,
        `치과의사 박무현이었다. 나는 박무현을 따라 백호동 탈출정 앞으로 움직였다.`, 
        `거기에는 신해량, 서지혁, 백애영, 유금이가 있었다.`];
    const router = useRouter();
    const interval = useRef();
    const index = useRef(0);
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(()=>{
        interval.current = setInterval(()=> {
            if(index.current > 2) {
                clearInterval(interval.current);
                dispatch({
                    type: BATTLE,
                    data: {status: 'onGoing', action: 'event', gameToken: state.index.gameToken }
                });
                router.push('/battle');  
                return;                          
            }
            setScript(scriptArr[index.current]);
            index.current++;
        }, 3000);

        return () => {clearInterval(interval.current)};
    },[script]);
    
    return (
        <div id="intro">
            <div id="alarm">
                <p>주의. 본 게임은 62화까지의 스포일러를 포함하고 있습니다.</p> 
                <p>단, 전투할 특정 인물과 집단명은 표기하지 않았습니다.</p>
            </div>
            <div id="wake">
                {script}
            </div>
        </div>
    );
}

export default Intro;