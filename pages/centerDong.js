import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { Stat } from '/components/Stat';
import { useDispatch, useSelector } from 'react-redux';
import { JOB, PLAY, SELECT } from '../reducers';

const CenterDong = () => {
    const [ job, setJob ] = useState('');
    const [ selected, setSelected ] = useState(1);
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const select = state.index.select;
    const [ status, setStatus ] = useState('onGoing');

    const onChangeInput = (e) => {
        setJob(e.target.value);
    }
    const onClickJobBtn = (e) => {
        dispatch({
            type: JOB,
            data: { status: status, action: 'event', inputData: {userInput: job}, gameToken: state.index.gameToken }
        });
    }
    const onClickPlayBtn = (e) => {
        dispatch({
            type: PLAY,
            data: { status: status, action: 'event', gameToken: state.index.gameToken }
        });
    }
    const handleChangeSelect = (e) => {
        setSelected(e.target.value);
    }
    const onClickSelectBtn = (e) => {
        dispatch({
            type: SELECT,
            data: { status: status, action: 'event', gameToken: state.index.gameToken,
                    inputData: {selected: {'SELECT_CD': state.index.selectCode, 'OPTION_SEQ': selected }} }
        });
    }

    return (
            <div className="centerDong">
                <div id="resultTxt">
                    {state.index.resultTxt !== undefined ?
                    <div>
                        {state.index.resultTxt}
                        <button className="centerDong-btn" onClick={onClickPlayBtn}>다음</button>
                        <Stat />
                    </div>
                    :state.index.play !== 'select'?
                        <>    
                            <p>엘리베이터 문이 열렸습니다. 제 4해저기지 내부가 보입니다.</p>
                            <p>당신은 백호동 숙소에 강수정씨가 가져다 둔 짐을 풀고 휴식을 취했습니다.</p>
                            <p>당신은 오늘 휴가를 보냅니다. 특수직인 당신의 직업은 무엇입니까?</p>
                            <input type="text" id="inputJob" ref={inputRef} value={job} onChange={onChangeInput}/>
                            <button className="centerDong-btn" onClick={onClickJobBtn}>입력</button>
                        </>
                        :<>
                            <p>{select.selectHead}</p>
                            <select onChange={handleChangeSelect} value={selected}>
                                {select.selectOptions.map((v)=>{
                                    return <option key={v.value} value={v.value}>{v.name}</option>
                                })}
                            </select>
                            <button className="centerDong-btn" onClick={onClickSelectBtn}>선택</button>
                            <Stat />
                        </> 
                    }
                    
                </div>
            </div>
    );
}

export default CenterDong;