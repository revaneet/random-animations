let colorGradientTimelineAnime;
let timeline;
$(function(){
    $("#color-gradient-timeline").load("/Color-Gradient-Timeline/index.html"); 
    $("#design-for-grid").load("/Design-for-Grid/index.html"); 
    $("#great-thinkers").load("/Moving-letters/Great-Thinkers/index.html"); 
    $("#ready-set-go").load("/Moving-letters/Ready-Set-Go/index.html"); 
    $("#sunny-mornings").load("/Moving-letters/Sunny-Mornings/index.html"); 
    $("#thursday").load("/Moving-letters/Thursday/index.html"); 
    
    // -----------------------------------color-gradient-timeline-----------------------------------
    document.getElementById('color-gradient-timeline').addEventListener('mouseover' , () => {
        colorGradientTimelineAnime =  anime({
            targets: '.box',
            translateY: [150,40],
            backgroundColor: {
                value: (el, i, t) => {
                    const r = 58 + (i * 12);
                    const g = 35 + (i * 12);
                    const b = 220;
                    const color = `rgb(${r}, ${g}, ${b})`;
                    return color;
                  },
                  easing: 'linear',
                  duration: 200,
            },
            duration: 900,
            easing: 'easeOutElastic',
            elasticity: 500,
            delay: (el,i,t) => i*20,
            loop: true,
            direction: 'alternate',
    
        });
    })

    // -----------------------------------design-for-grid-----------------------------------
    document.getElementById('design-for-grid').addEventListener('mouseover' , () => {
        timeline = anime.timeline({
            easing: 'easeOutExpo',
            duration: 1000,
            loop: true,
            direction: 'alernate'
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
    })




});



