// scroll start

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $('.navbar').addClass('custom_bg');
        }
  
        else{
            $('.navbar').removeClass('custom_bg');  	
        }
    })
  })

  
// scroll end


// Counter Js start

$('.count').counterUp({
    delay: 10,
    time: 3000
    });

// Counter Js end
