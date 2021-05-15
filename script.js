$(function(){
    $("#color-gradient-timeline").load("/Color-Gradient-Timeline/index.html"); 
    $("#design-for-grid").load("/Design-for-Grid/index.html"); 
    $("#great-thinkers").load("/Moving-letters/Great-Thinkers/index.html"); 
    // $("#ready-set-go").load("/Moving-letters/Ready-Set-Go/index.html"); 
    $("#sunny-mornings").load("/Moving-letters/Sunny-Mornings/index.html"); 
    $("#thursday").load("/Moving-letters/Thursday/index.html"); 
    
    // -----------------------------------scroll-section-1-----------------------------------
    $('.scroll-main-container').scroll(function() {
        var hT = $('#scroll-section-1').offset().top,
            hH = $('#scroll-section-1').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS >= (hT+hH-wH)){            
            colorGradientTimelineAnimation();
            designForGridAnimation();
        }
    });

     // -----------------------------------scroll-section-2-----------------------------------
    $('.scroll-main-container').scroll(function() {
        var hT = $('#scroll-section-2').offset().top,
            hH = $('#scroll-section-2').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS >= (hT+hH-wH)){
            greatThinkersAnimation()
        }
    });

    // -----------------------------------scroll-section-3-----------------------------------
    $('.scroll-main-container').scroll(function() {
        var hT = $('#scroll-section-3').offset().top,
            hH = $('#scroll-section-3').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS >= (hT+hH-wH)){
            sunnyMorningsAnimation();
            thursdayAnimation();
        }
    });

});



