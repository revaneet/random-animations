window.onload = function(){
    anime({
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
}