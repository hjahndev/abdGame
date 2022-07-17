import React from 'react';

export const SelectBtnDiv = ({selectInfo}) => {
    return (
        <div className="selectBtnDiv">
            <button className="playBtn">{selectInfo.name}</button>
        </div>
    );
}