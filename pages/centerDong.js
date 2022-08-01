import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { Stat } from '/components/Stat';
import { Scripts } from '/components/Scripts';
import { useDispatch, useSelector } from 'react-redux';
import { JOB, PLAY, SELECT } from '../reducers';

const CenterDong = () => {
    const [ job, setJob ] = useState('');
    const [ playerInput, setPlayerInput ] = useState('');
    const inputRef = useRef(null);
    const playerInputRef = useRef(null);
    const [ selected, setSelected ] = useState(1);
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const select = state.index.select;
    const sceneStatus = state.index.sceneStatus;
    const [ status, setStatus ] = useState('onGoing');
    const router = useRouter();

    const onChangeInput = (e) => {
        setJob(e.target.value);
    }
    const onClickJobBtn = (e) => {
        dispatch({
            type: JOB,
            data: { status: status, action: 'event', inputData: {userInput: job}, gameToken: state.index.gameToken }
        });
    }
    const onChangePlayerInput = (e) => {
        setPlayerInput(e.target.value);
    }
    const onClickPlayerInputBtn = (e) => {
        dispatch({
            type: PLAY,
            data: { status: status, action: 'event', inputData: {userInput: playerInput}, gameToken: state.index.gameToken }
        });
        setPlayerInput('');
    }
    const onClickPlayBtn = (e) => {
        dispatch({
            type: PLAY,
            data: { status: status, action: 'event', gameToken: state.index.gameToken }
        });
        if(state.index.day === 6 && sceneStatus === 'end') {
            router.push('/intro');  
        }
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
                <Scripts />
                {state.index.day === 1 && state.index.play === 'input'?
                    <>
                    <input type="text" ref={inputRef} value={job} onChange={onChangeInput}/>
                    <button className="centerDong-btn" onClick={onClickJobBtn}>입력</button> 
                    </>
                :null     
                }
                {state.index.inputVisible?
                    <>
                    <input type="text" ref={playerInputRef} value={playerInput} onChange={onChangePlayerInput} placeholder='안녕하세요? 새로온 개발자 삼번입니다.'/>
                    <button className="centerDong-btn" onClick={onClickPlayerInputBtn}>입력</button> 
                    </>
                :null     
                }
                {sceneStatus === 'end'?
                    <button className="centerDong-btn" onClick={onClickPlayBtn}>다음</button>    
                :null
                }
                {state.index.play === 'select'?
                    <div>
                        <p>{select.selectHead}</p>
                        <select onChange={handleChangeSelect} value={selected}>
                            {select.selectOptions.map((v)=>{
                                return <option key={v.value} value={v.value}>{v.name}</option>
                            })}
                        </select>
                        <button className="centerDong-btn" onClick={onClickSelectBtn}>선택</button> 
                    </div>
                :null   
                }
                {state.index.player !== undefined?
                    <Stat />
                :null
                }
            </div>
                            
                            
                            
    );
}

export default CenterDong;