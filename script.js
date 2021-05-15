let colorGradientTimelineAnime;
let timeline;
$(function(){
    $("#color-gradient-timeline").load("/Color-Gradient-Timeline/index.html"); 
    $("#design-for-grid").load("/Design-for-Grid/index.html"); 
    $("#great-thinkers").load("/Moving-letters/Great-Thinkers/index.html"); 
    // $("#ready-set-go").load("/Moving-letters/Ready-Set-Go/index.html"); 
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

    // -----------------------------------great-thinkers-----------------------------------
    document.getElementById('great-thinkers').addEventListener('mouseover' , () => {
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

    })

    // -----------------------------------sunny-mornings-----------------------------------
    document.getElementById('sunny-mornings').addEventListener('mouseover' , () => {
        var letters = document.querySelector('.sunny-mornings-letters');
        letters.innerHTML = letters.textContent.replace(/\S/g, "<span class='sunny-mornings-letter'>$&</span>");

        var timeline = anime.timeline({
            loop: true
        })
        timeline.add({
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

    })

    // -----------------------------------thursday-----------------------------------
    document.getElementById('thursday').addEventListener('mouseover' , () => {
        var textWrapper = document.querySelector('.thursday-heading .thursday-letters')
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='thursday-letter'>$&</span>");

        var timeline = anime.timeline({
            loop:true
        })

        timeline.add({
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

    })
    

});



