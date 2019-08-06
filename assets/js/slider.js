$(document).ready(function(){
    var mainOwl = $( "#lt-owl-carousel-slider" ),
        prev = $( ".lt-owl-arrow-left" ),
        next = $( ".lt-owl-arrow-right" );
    mainOwl.owlCarousel({
        loop: true,
        center: true,
        margin: 5,
        stagePadding: 300,
        items:1,
        autoplay: true,
        autoplayTimeout:5000,
        smartSpeed: 300,
        autoplaySpeed: 500,
        responsive: {
            320: {
                items:1,
                stagePadding: 0,
                margin: 0,
            },
            1920: {
                items:1,
                stagePadding: 300,  
            }
        }
    });

    prev.on("click", function () {
        mainOwl.trigger( "prev.owl.carousel" );
    });

    next.on("click", function () {
        mainOwl.trigger( "next.owl.carousel" )
    })
});

$(document).ready(function(){
    var commentOwl = $(" #lt-owl-carousel-comments ");
    commentOwl.owlCarousel({
        loop: true,
        margin: 35,
        items:3,
        autoplay:true,
        autoplayTimeout:8000,
        smartSpeed: 300,
        autoplaySpeed: 500,
        autoWidth: true,
        mergeFit: true
    })
})

$(document).ready(function(){
    var commentOwl = $(" #lt-owl-carousel-partners ");
    commentOwl.owlCarousel({
        loop: true,
        margin: 35,
        items:3,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed: 300,
        autoplaySpeed: 500,
        autoWidth: true,
        mergeFit: true
    })
})