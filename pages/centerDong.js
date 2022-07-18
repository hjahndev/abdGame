import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';

import { useDispatch } from 'react-redux';
import { jobAction } from '../reducers';

const CenterDong = () => {
    const [ job, setJob ] = useState('');
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    
    const onChangeInput = (e) => {
        setJob(e.target.value);
    }

    const onClickJobBtn = (e) => {
        dispatch(jobAction({job}));
    }

    return (
            <div className="centerDong">
                <div>
                    <p>엘리베이터 문이 열렸습니다. 제 4해저기지 내부가 보입니다.</p>
                    <p>당신은 백호동 숙소에 강수정씨가 가져다 둔 짐을 풀고 휴식을 취했습니다.</p>
                    <p>당신은 오늘 휴가를 보냅니다. 특수직인 당신의 직업은 무엇입니까?</p>
                    <input type="text" id="inputJob" ref={inputRef} value={job} onChange={onChangeInput}/>
                    <button id="jobBtn" onClick={onClickJobBtn}>입력</button>
                </div>

                <p>무엇을 하시겠습니까?</p>
                <select id="selectWhatToDo">
                    <option>-선택-</option>
                </select>
                <button id="selectBtn">선택</button>
            </div>
    );
}

export default CenterDong;