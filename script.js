$(function(){
    $("#color-gradient-timeline").load("/Animations/Color-Gradient-Timeline/index.html"); 
    $("#design-for-grid").load("/Animations/Design-for-Grid/index.html"); 
    $("#great-thinkers").load("/Animations/Moving-letters/Great-Thinkers/index.html"); 
    $("#hello-world").load("/Animations/Moving-letters/Hello-World/index.html"); 
    $("#sunny-mornings").load("/Animations/Moving-letters/Sunny-Mornings/index.html"); 
    $("#thursday").load("/Animations/Moving-letters/Thursday/index.html");

    function getTargets(animation) {
        return animation.children.reduce(
          (all, one) => all.concat(getTargets(one)),
          animation.animatables.map((a) => a.target)
        )
      }
    function pauseAnimation(animation)
    {
        if(animation)
        {
            getTargets(animation).forEach(anime.remove)
            animation.pause();
        }
    }
    function isVisible(element)
    {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        console.log(pageTop , pageBottom , elementTop , elementBottom)

        return ((pageTop <= elementTop) && (pageBottom >= elementBottom));
    }
    // -----------------------------------scroll-section----------------------------------
    $('.scroll-main-container').scroll(function() {
        if(isVisible('#intro-section')) {
        }
        if (isVisible('#scroll-section-1')){ 
            colorGradientTimelineAnimation();
            designForGridAnimation();
        }
        else{
            pauseAnimation(colorGradientTimelineAnime);
            pauseAnimation(designForGridAnime);
        }
        if (isVisible('#scroll-section-2')){
            greatThinkersAnimation();
            helloWorldAnimation()
        }
        else{
            pauseAnimation(greatThinkersAnime);
            pauseAnimation(helloWorldAnime)
        }
        if (isVisible('#scroll-section-3')){
            sunnyMorningsAnimation();
            thursdayAnimation();
        }
        else{
            pauseAnimation(sunnyMorningsAnime);
            pauseAnimation(thursdayAnime);
        }
    });

});



