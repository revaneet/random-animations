let thursdayAnime;
function thursdayAnimation(){
    var textWrapper = document.querySelector('.thursday-heading .thursday-letters')
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='thursday-letter'>$&</span>");

    thursdayAnime = anime.timeline({
        loop:true
    }).add({
        targets: '.thursday-letter',
        opacity:[0,1],
        easing: 'easeOutExpo',
        duration: 900,
        delay: (el , i) => 70 * (i)
    })
    .add({
        targets: '.thursday-line',
        scaleX: [0,1],
        opacity: [0.5,1],
        easing: 'easeOutExpo',
        duration: 700,
        offset: '-=800',
        delay: (el , i , l) => 80 * (l-i)
    })
}