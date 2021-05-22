let sunnyMorningsAnime;
function sunnyMorningsAnimation(){
    var letters = document.querySelector('.sunny-mornings-letters');
    var letter = document.querySelector('.sunny-mornings-letter');
    letters.innerHTML = letters.textContent.replace(/\S/g, "<span class='sunny-mornings-letter'>$&</span>");

    sunnyMorningsAnime = anime.timeline({
        loop: true
    }).add({
        targets: ' .sunny-mornings-letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        duration: 900,
        delay: (el , i) => 70*i,
        easing: 'easeOutExpo'
    })
    .add({
        targets: '.sunny-mornings-letters',
        duration: 1000,
        opacity: 0,
        delay: 1000,
        easing: 'easeOutExpo'
    })

}