import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import { MEMBER_STAT_VISIBLE } from '../reducers/memberStat';

const MemberStat = () => {
    const dispatch = useDispatch();
    const isStatsModalVisible = useSelector((state) => state.memberStat.isStatsModalVisible);
    const charaterStatus = useSelector((state) => state.memberStat.charaterStatus);
    const hideStatsModal = () => {
        dispatch({
            type: MEMBER_STAT_VISIBLE,
            data: { isStatsModalVisible: false}
        }); 
    }
    return (
        <Modal title="스탯보기" style={{color:'ivory'}} bodyStyle={{backgroundColor:'slategrey'}}
        visible={isStatsModalVisible} onCancel={hideStatsModal} footer={null}>
            <div className="character-stat">
                <img src="/images/pmh.png" style={{width:'100px', height:'100px'}}/>
                {charaterStatus}
            </div>
            <div className="character-stat">
                <img src="/images/ygy.png" style={{width:'100px', height:'100px'}}/>
            </div>
            <div className="character-stat">
                <img src="/images/shr.png" style={{width:'100px', height:'100px'}}/>
            </div>
            <div className="character-stat">
                <img src="/images/sgh.png" style={{width:'100px', height:'100px'}}/>
            </div>
            <div className="character-stat">
                <img src="/images/pay.png" style={{width:'100px', height:'100px'}}/>
            </div>
        </Modal>
    );
}

export default MemberStat;