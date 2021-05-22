$(function(){
    $("#color-gradient-timeline").load("/Color-Gradient-Timeline/index.html"); 
    $("#design-for-grid").load("/Design-for-Grid/index.html"); 
    $("#great-thinkers").load("/Moving-letters/Great-Thinkers/index.html"); 
    // $("#ready-set-go").load("/Moving-letters/Ready-Set-Go/index.html"); 
    $("#sunny-mornings").load("/Moving-letters/Sunny-Mornings/index.html"); 
    $("#thursday").load("/Moving-letters/Thursday/index.html"); 
    
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
            // getTargets(animation).forEach(anime.remove)
            animation.pause();
        }
    }
    function isVisible(element)
    {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        return ((pageTop <= elementTop) && (pageBottom >= elementBottom));
    }
    // -----------------------------------scroll-section-1-----------------------------------
    $('.scroll-main-container').scroll(function() {
        if (isVisible('#scroll-section-1')){ 
            colorGradientTimelineAnimation();
            // designForGridAnimation();
        }
        else{
            pauseAnimation(colorGradientTimelineAnime);
            // pauseAnimation(designForGridAnime);
        }
        if (isVisible('#scroll-section-2')){
            greatThinkersAnimation();
        }
        else{
            pauseAnimation(greatThinkersAnime);
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



