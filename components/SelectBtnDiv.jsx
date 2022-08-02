import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BATTLE } from '../reducers/battle';

export const SelectBtnDiv = ({selectInfo}) => {
    const [locationValue, setLocationValue] = useState('');
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const battleData = useSelector((state) => state.battle);

    const onClickLocation = (e) => {
        setLocationValue(e.target.value);
        dispatch({
            type: BATTLE,
            data: { status: 'onGoing', action: 'event', gameToken: state.index.gameToken,
            inputData: {selected: {'SELECT_CD': battleData.selectCode, 'OPTION_SEQ': e.target.value }} }
        });
    }

    return (
        <div className="selectBtnDiv">
            <button className="playBtn" onClick={onClickLocation} value={selectInfo.value}>{selectInfo.name}</button>
        </div>
    );
}