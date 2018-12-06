$(document).ready(function(){
    $('.custom1').owlCarousel({
        animateOut: 'fadeOut',
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        items:1,
        loop:true,
        smartSpeed:450
    })

     // Listen to owl events:
 .on('changed.owl.carousel', function(event) {
    var currentItem = event.item.index;
    window.location.hash = currentItem + 1;
    console.log(currentItem);
})


$('#details-btn').on('click',function(){

    //$(".caption-text").css('display','block');
    $(".caption-text").toggle();

    $(this).text(function(i, text){
        return text === "Hide Details" ? "Show Details" : "Hide Details";
    })




})


// $( "#target" ).click(function() {
//     alert( "Handler for .click() called." );
//   });





  });

