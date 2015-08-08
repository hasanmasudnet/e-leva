$( document ).ready(function() {

    //side menu
    $( ".menu-btn" ).on( "click", function () {
        $( ".side-menu" ).toggleClass( "hide-menu" );
        $( ".big-slider, .page-title" ).toggleClass( "full-slider" );
    });

    //mobile side menu
    $(".menu-btn-min").on("click", function(){
      $(".menu-btn-min + ul").slideToggle("slow");
    });

    //header hide and show
    $(".up-btn").on( "click", function () {
        $( "header" ).toggleClass( "hide-header" );
        if ($(".up-btn i").hasClass( "icon-up-arrow" ) )
            $(".up-btn i").removeClass( "icon-up-arrow" ).addClass( "icon-down-arrow" );
        else $(".up-btn i").removeClass( "icon-down-arrow" ).addClass( "icon-up-arrow" );
    });



    // Mini Carasole Hover effect
    $(".mini-carousel .item").mouseover(function(){
        $(".carousel-hover").css("display", "block");
    })
    .mouseout(function(){
        $(".carousel-hover").css("display", "none");
    });

    // $( ".mini-carousel" ).each(function(){
    //     var $item = $(this).find( ".item" ),
    //         $img = $item.find("a > img"),
    //         $imgsrc = $img.attr("src");
    //         $name = $img.attr("alt");
    //
    //     $item.mouseover(function(){
    //         $(this).append("<div class=\"carousel-hover\"><img src=\""+$imgsrc+"\"><small>"+$name+"</small></div>");
    //         console.log($name);
    //     })
    //     .mouseout(function(){
    //         $(".carousel-hover").remove();
    //     });
    //
    // });
});
