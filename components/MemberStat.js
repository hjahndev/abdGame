import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import { MEMBER_STAT_VISIBLE } from '../reducers/memberStat';

const MemberStat = () => {
    const dispatch = useDispatch();
    const isStatsModalVisible = useSelector((state) => state.memberStat.isStatsModalVisible);
    const memberStat = useSelector((state) => state.memberStat);
    const pmh = memberStat.pmh;
    const ygy = memberStat.ygy;
    const shr = memberStat.shr;
    const sgh = memberStat.sgh;
    const pay = memberStat.pay;
    const hideStatsModal = () => {
        dispatch({
            type: MEMBER_STAT_VISIBLE,
            data: { isStatsModalVisible: false}
        }); 
    }
    return (
        <Modal title="스탯보기" style={{color:'ivory'}} bodyStyle={{backgroundColor:'slategrey'}}
        visible={isStatsModalVisible} onCancel={hideStatsModal} footer={null}>
            {pmh !== null?
            <>
                <div className="character-stat">
                    <img src="/images/pmh.png" style={{width:'100px', height:'100px'}}/>
                    <div className="stat-view">
                        <div>{pmh.name} ({pmh.active})</div>
                        <div>체력: {pmh.hp} / {pmh.maxHp} <div className="hp-bar"><div className="hp pmh"></div></div></div>
                        <div>정신력: {pmh.mp} / {pmh.maxMp} <div className="mp-bar"><div className="mp pmh"></div></div></div>
                        <div>공격력: {pmh.att}</div>
                    </div>
                </div>
                <div className="character-stat">
                    <img src="/images/ygy.png" style={{width:'100px', height:'100px'}}/>
                    <div className="stat-view">
                        <div>{ygy.name} ({ygy.active})</div>
                        <div>체력: {ygy.hp} / {ygy.maxHp} <div className="hp-bar"><div className="hp ygy"></div></div></div>
                        <div>정신력: {ygy.mp} / {ygy.maxMp} <div className="mp-bar"><div className="mp ygy"></div></div></div>
                        <div>공격력: {ygy.att}</div>
                    </div>
                </div>
                <div className="character-stat">
                    <img src="/images/shr.png" style={{width:'100px', height:'100px'}}/>
                    <div className="stat-view">
                        <div>{shr.name} ({shr.active})</div>
                        <div>체력: {shr.hp} / {shr.maxHp} <div className="hp-bar"><div className="hp shr"></div></div></div>
                        <div>정신력: {shr.mp} / {shr.maxMp} <div className="mp-bar"><div className="mp shr"></div></div></div>
                        <div>공격력: {shr.att}</div>
                    </div>
                </div>
                <div className="character-stat">
                    <img src="/images/sgh.png" style={{width:'100px', height:'100px'}}/>
                    <div className="stat-view">
                        <div>{sgh.name} ({sgh.active})</div>
                        <div>체력: {sgh.hp} / {sgh.maxHp} <div className="hp-bar"><div className="hp sgh"></div></div></div>
                        <div>정신력: {sgh.mp} / {sgh.maxMp} <div className="mp-bar"><div className="mp sgh"></div></div></div>
                        <div>공격력: {sgh.att}</div>
                    </div>
                </div>
                <div className="character-stat">
                    <img src="/images/pay.png" style={{width:'100px', height:'100px'}}/>
                    <div className="stat-view">
                        <div>{pay.name} ({pay.active})</div>
                        <div>체력: {pay.hp} / {pay.maxHp} <div className="hp-bar"><div className="hp pay"></div></div></div>
                        <div>정신력: {pay.mp} / {pay.maxMp} <div className="mp-bar"><div className="mp pay"></div></div></div>
                        <div>공격력: {pay.att}</div>
                    </div>
                </div>
            </>
            :null}
        </Modal>
    );
}

export default MemberStat;