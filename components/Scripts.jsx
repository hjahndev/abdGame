import React from 'react';
import { useSelector } from 'react-redux';

export const Scripts = () => {
    const state = useSelector((state) => state);
    const scripts = state.index.scripts;
    const day = state.index.day;

    return (
        <div className="script">
            { day > 1? `${(day - 1)}일차.`
            :null}
            {scripts.map((v, i)=>{
                return <p key={i}>{v}</p>
            })}
        </div>
    );
}