$('document').ready(function(){
    // animating the hamburger button
    $('.hamburger-button').on('click', function () {
        $('.animated-icon').toggleClass('open');
    });

    // toggling the dropdown list account\
    $('.custom-dropmenu').on('click',function(){
        $('#myDropdownMenu').toggleClass('show-me');
    });
    $('.custom-dropmenu').on('click',function(){
        $('.dropdown-triangle').toggleClass('show-me');
    })

    // Rate The Restaurant 
    $('.star').mouseover(function(){
        $('.star').addClass('rated');
    });

    // close icon card 
    $('#x1').click(function(){
        $('#1').fadeOut(500).remove(500);
    })

})




$('document').ready(function(){
    $('#otherMeals').owlCarousel({
        rtl:true,
        loop:false,
        responsiveClass:true,
        margin:10,
        nav:false,
        dots:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
});

$('.cancel-btn').on('click',function(){
    $('#modalDiv').removeClass('show')
})

//**************  cart full page */

    // close icon card 
    $('#cart1').click(function(){
        $('#cartCard1').fadeOut(500).remove(500);
    })

    $('#cart2').click(function(){
        $('#cartCard2').fadeOut(500).remove(500);
    })

    /************** checking the existince of those elements =================

    var cartCard = $('#cartCard1');
    var cartCard2 = $('#cartCard2');

    if(cartCard & cartCard == true) {
        console.log('we found them');
    } else{
        console.log('nothing');
    }

    */