import React from 'react';

export const SelectBtnDiv = ({selectInfo}) => {
    return (
        <div class="selectBtnDiv">
            <button class="playBtn">{selectInfo.name}</button>
        </div>
    );
}