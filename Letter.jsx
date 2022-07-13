import React, { useState, useRef } from 'react';

const Letter = () => {
    const [ openMail, setOpenMail ] = useState(false);
    const interval = useRef();

    const letter = `축하드립니다. 귀하께서는 한국, 미국, 캐나다, 호주, 뉴질랜드, 러시아, 일본, 
    중국 총 8개국이 건설한 해저 3000m의 북태평양해저기지(NPIUS)에 합격하였습니다.`
    const letterArr = letter.split('');
    const $letterContent = document.querySelector('#letter-content');
    let charCount = 0;
    const $typingSound = document.querySelector('#typingSound');
    
    const typeLetter = () => {
        $letterContent.innerText = letterArr.slice(0, charCount).join('');
        charCount++;
        $typingSound.play();
        if(charCount > letter.length) {
            clearInterval(interval);
            $typingSound.pause();
            $typingSound.currentTimme = 0;
        }
    }

    const onClickLetter = () => {
        setOpenMail(true);
        interval.current = setInterval(typeLetter, 100);
    };

    return (
        <div class="start-frame">
            <div class="start-letter">
                <h2>어두운 바다의 등불이 되어 - 연산호</h2>
                <h5>팬게임 텍스트 RPG (주의: 스포일러가 있습니다.)</h5>        
                <div>
                    <audio id="typingSound" src="./audio/typingSound.mp3"></audio>
                    { openMail === true ? 
                    <div id="npius">     
                        <p id="letter-content"></p>
                        <p>당신은 제주 해군기지에 가서 해저기지 합격 서류를 낸 후 사흘간 배와 헬기를 통해 대한도로
                            이동하였습니다. 프리야 쿠마리는 당신에게 NEP 가입 서류 뭉치를 내밀었습니다.</p>
                            
                        <p>서명을 마치면 당신은 바로 제 4해저기지의 백호동에 짐을 풀고 해저기지 생활을 시작해야 합니다.</p>
                        <p>서명하시겠습니까?</p>
                        <input id="name-input" placeholder="성명"/>
                        <a id="sign" href="./02.html ">서명</a>
                    </div>  
                    :<> 
                      <p id="explanation">21세기 말, 대한민국 국적을 가진 당신은 어느날 한 통의 메일을 수신하였습니다.</p> 
                      <a href="#" id="openMail" onClick={onClickLetter}>발신자: North Pacific International Undersea Station</a>
                     </>    
                    }
                </div>
            </div>
        </div>
    );
}

export default Letter;   