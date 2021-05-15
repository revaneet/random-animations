window.onload = function(){
    var textWrapper = document.querySelector('.great-thinkers-letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g , "<span class='great-thinkers-letter'>$&</span>");

    var timeline = anime.timeline({
        loop: true
    })

    timeline.add({
        targets: '.great-thinkers-letter',
        duration: 3000,
        delay: (el , i) => 150*i,
        easing: 'easeInOutQuad',
        opacity: [0,1]
        
    })
    .add({
        targets: '.great-thinkers-letters',
        duration: 1000,
        delay: 1000,
        opacity: 0,
        easing: 'easeOutExpo'
    })
   
}