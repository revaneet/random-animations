let helloWorldAnime

function helloWorldAnimation() {
    var textWrapper = document.querySelector('.hello-world-heading .letters');
    console.log(textWrapper)
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    helloWorldAnime = anime.timeline({loop: true})
    .add({
        targets: '.hello-world-heading .line',
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 700
    })
    .add({
        targets: '.hello-world-heading .line',
        translateX: [0, document.querySelector('.hello-world-heading .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
    }).add({
        targets: '.hello-world-heading .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i+1)
    }).add({
        targets: '.hello-world-heading',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

}