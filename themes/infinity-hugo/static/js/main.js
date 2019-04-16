$(window).load(function() {
    $("#preloader").fadeOut("slow");
});

$(document).ready(function(){


     new WOW().init();


     $('#top-nav').onePageNav({
        currentClass: 'current',
        changeHash: true,
        scrollSpeed: 1200
    });

     
    //animated header class
    $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll > 200) {
        //console.log('a');
        $(".navigation").addClass("animated");
    } else {
        //console.log('a');
        $(".navigation").removeClass("animated");
    }});
    
    $year = $('#countdown_dashboard').data('year');
    $month = $('#countdown_dashboard').data('month');
    $day = $('#countdown_dashboard').data('day');
    $('#countdown_dashboard').countDown({
        targetDate: {
            'day':      $day,
            'month':    $month,
            'year':     $year,
            'hour':     23,
            'min':      59,
            'sec':      59,
        },
        omitWeeks: true
    });

    $(".about-slider").owlCarousel(
        {
        singleItem: true,
        pagination : true,
        autoPlay : 5000,
        }
    );

    //contact form validation
    $("#contact-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            message: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Please enter Your Name",
                minlength: "Your name must consist of at least 2 characters"
            },
            message: {
                required: "Please Write Something",
                minlength: "Your message must consist of at least 2 characters"
            },
            email: "Please enter a valid email address"
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"mail.php",
                success: function() {
                    $('#contact-form :input').attr('disabled', 'disabled');
                    $('#contact-form').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contact-form').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });

});
const logo = document.querySelector("#top-nav .navbar-brand img");
const buttonWrapper = document.querySelector(".hero-area-btn-wrapper");
const homeButtons = document.querySelectorAll(".btn-home");
function logoToggler(x) {
  if (x.matches) { // If media query matches
    logo.setAttribute("src","images/fevicron.png");
    logo.style.height = "40px";
  } else {
    logo.setAttribute("src","images/Inbound-mantra-logo.png");
    logo.style.height = "79.9833px";
  }
}
function classChanger(y){
    if(y.matches){
        buttonWrapper.classList.remove("flex-row");
        buttonWrapper.classList.add("flex-column");
        homeButtons.forEach(function(button){
            button.classList.add("btn-sm");
        })
    }
    else{
        buttonWrapper.classList.remove("flex-column");
        buttonWrapper.classList.add("flex-row");
        homeButtons.forEach(function(button){
            button.classList.remove("btn-sm");
        })
    }
}

var x = window.matchMedia("(max-width: 992px)");
logoToggler(x); // Call listener function at run time
x.addListener(logoToggler); // Attach listener function on state changes

var y = window.matchMedia("(max-width: 500px)");
classChanger(y);//call listener function at run time
y.addListener(classChanger);





