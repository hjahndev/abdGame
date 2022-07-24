import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MEMBER_STAT, MEMBER_STAT_VISIBLE } from '../reducers/memberStat';
import { Modal } from 'antd';
import MemberStat from './MemberStat';

export const Menu = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const [isItemsModalVisible, setIsItemsModalVisible ] = useState(false);
    const [isRuleModalVisible, setIsRuleModalVisible ] = useState(false);
    const [isMakerModalVisible, setIsMakerModalVisible ] = useState(false);

    const showStatsModal = () => {
        dispatch({
            type: MEMBER_STAT,
            data: { gameToken: state.index.gameToken}
        });
        dispatch({
            type: MEMBER_STAT_VISIBLE,
            data: { isStatsModalVisible: true}
        }); 
    }
    
    const showItemsModal = () => {
        setIsItemsModalVisible(true);
    }
    const hideItemsModal = () => {
        setIsItemsModalVisible(false);
    }
    const showRuleModal = () => {
        setIsRuleModalVisible(true);
    }
    const hideRuleModal = () => {
        setIsRuleModalVisible(false);
    }
    const showMakerModal = () => {
        setIsMakerModalVisible(true);
    }
    const hideMakerModal = () => {
        setIsMakerModalVisible(false);
    }
    return (
        <>
            <nav className="menu">
                <nav className="menu-link">
                    <a className="menu-item" onClick={showStatsModal}>스탯 보기</a>
                    <a className="menu-item" onClick={showItemsModal}>아이템 보기</a>
                    <a className="menu-item" onClick={showRuleModal}>게임 설명</a>
                    <a className="developer-information" onClick={showMakerModal}>제작자 정보</a>
                </nav>
            </nav>
            <nav className="button-nav">
                <div className="hp-bar">
                    <div className="hp pmh"></div>
                    <button className="button-character pmh"></button>
                </div>
                <div className="hp-bar">
                    <div className="hp ygy"></div>
                    <button className="button-character ygy"></button>
                </div>
                <div className="hp-bar">
                    <div className="hp shr"></div>    
                    <button className="button-character shr"></button>
                </div>
                <div className="hp-bar">
                    <div className="hp sgh"></div> 
                    <button className="button-character sgh"></button>
                </div>
                <div className="hp-bar">
                    <div className="hp pay"></div>     
                    <button className="button-character pay"></button>
                </div>    
            </nav>
            <MemberStat />
            <Modal title="아이템 보기" style={{color:'ivory'}} bodyStyle={{backgroundColor:'black'}}
            visible={isItemsModalVisible} onCancel={hideItemsModal} footer={null}>
            </Modal>
            <Modal title="게임 설명" style={{color:'ivory'}} bodyStyle={{backgroundColor:'black'}}
            visible={isRuleModalVisible} onCancel={hideRuleModal} footer={null}>
                <p>제4해저기지에서 제2해저기지까지 이동해 케이블카를 타고 탈출하십시오.</p>
                <p>[스탯 보기]를 선택하면 팀원의 체력, 정신력, 공격력, 신뢰도(친밀도)를 확인할 수 있습니다.
                    (신해량, 서지혁, 백애영, 박무현, 유금이)</p>
                <p>[아이템 보기]를 선택하면 그동안 모은 아이템을 확인할 수 있습니다.
                    (식량, 총, 약)</p>
                <p>위 두 가지를 확인한 후 이동할 장소를 선택하십시오.</p>
                <p>장소에 따라 아이템 획득, 휴식이 가능하거나 전투가 일어날 수 있습니다. 
                    각 장소에서 가능한 선택지를 확인한 후 선택하여 주십시오.</p>
                <p>팀원에게 도움을 청할 경우 신해량, 서지혁, 백애영은 공격을 한 번 대신할 수 있으며
                    박무현, 유금이는 체력 혹은 정신력을 회복하게 해줍니다.
                    도움을 받을 수 있는 횟수는 해당 캐릭터가 사용자에게 가진 신뢰도에 비례합니다.</p>
                <p>총을 신해량, 서지혁, 백애영에게 줄 경우 신뢰도가 증가하지만
                    박무현, 유금이에게 줄 경우 정신력이 떨어집니다.</p> 
            </Modal>        
            <Modal title="제작자 정보" style={{color:'ivory'}} bodyStyle={{backgroundColor:'black'}}
            visible={isMakerModalVisible} onCancel={hideMakerModal} footer={null}>
                <p>어두운 바다의 등불이 되어(연산호 저)의 팬게임입니다.</p>
                <p>문피아, 시리즈, 리디북스, 카카페에 연재중이니 많은 관심 부탁드립니다.</p>
                <p>프론트: hjahn.dev@gmail.com</p>
                <p>백엔드:</p>
                <p>이미지: 어두운 바다의 직장인</p>
                <p>* special thanks to</p>
                <p>노션 정리: 우연</p>
                <p>로딩 이미지: 바다솜삿탕</p>
            </Modal>
        </>
    );
}
