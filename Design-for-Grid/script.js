window.onload = function(){

    var timeline = anime.timeline({
        easing: 'easeOutExpo',
        duration: 1000,
        // loop: true,
        // direction: 'alernate'
    });

    timeline.add({
        targets: '.design-for-grid-div',
        width: '100%',
        backgroundColor: 'rgb(197, 197, 255)',
        delay: (el , i , t) => i*100       
    })
    .add({
        targets: '.design-for-grid-div',
        width: '90%',
        backgroundColor: 'rgb(235, 235, 255)'
    })
    anime({
        targets: '#design-for-grid-heading',
        easing: 'easeOutExpo',
        top: '20%',
        opacity: 1,
        duration: 4000,
    },'-=2000');

    var squash = anime({
        targets: '.design-for-grid-section',
        scaleY: '2',
        scaleX: '2',
        translateX: '40%',
        rotate: '45deg',
        duration: 5000,
        autoplay: false
    });

    // document.getElementById('design-for-grid-heading').addEventListener('mouseover',() => {
    //     squash.play();
        
    // });
    
}