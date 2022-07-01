(function() {
    const $explanation = document.querySelector('#explanation');
    const $openMail = document.querySelector('#openMail');
    const $npius = document.querySelector('#npius');
    const $letterContent = document.querySelector('#letter-content');
    const $typingSound = document.querySelector('#typingSound');
    const letter = `축하드립니다. 귀하께서는 한국, 미국, 캐나다, 호주, 뉴질랜드, 러시아, 일본, 
    중국 총 8개국이 건설한 해저 3000m의 북태평양해저기지(NPIUS)에 합격하였습니다.`
    const length = letter.length;
    const letterArr = letter.split('');
    let charCount = 0;

    $openMail.addEventListener('click', ()=>{
        $explanation.remove();
        $openMail.remove();
        $npius.style.display = 'block';
        $typingSound.play();
    });

    const typeLetter = setInterval(()=>{
        $letterContent.innerText = letterArr.slice(0, charCount).join('');
        charCount++;
        if(charCount > length) {
            clearInterval(typeLetter);
            $typingSound.pause();
            $typingSound.currentTimme = 0;
        }
    }, 100);
})();