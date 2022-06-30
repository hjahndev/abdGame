(function() {
    $startBtn = document.querySelector('#start');
    $startScreen = document.querySelector('#start-screen');
    
    $startBtn.addEventListener('click', function(e) {
    $startScreen.innerHTML = `당신은 서명을 마치고 제4해저기지로 발걸음을 향했다.`;
    
        const scrollDown = setInterval(()=>{
            let pageYOffset = window.pageYOffset;
            console.log(pageYOffset);
            window.scrollTo(0, pageYOffset + 50);

            if(pageYOffset > 2100) {
                clearInterval(scrollDown);
            }
        }, 250);
        
        
     
    });
})();