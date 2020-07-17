jQuery(window).scroll(function () {
 	/*if(jQuery(document).scrollTop()>125){
       jQuery('#footer').fadeIn('300');
    }else{
        jQuery('#footer').fadeOut('300');
    }*/
    if(jQuery(document).scrollTop()>65){
        jQuery('.hed_down').fadeIn('easing').addClass('scroll');
    }else{
        jQuery('.hed_down').fadeIn('easing').removeClass('scroll');
    }
    /*if(jQuery(document).scrollTop() < + $(window).height() - 60){
        jQuery('.f1').fadeIn('easing').addClass('scroll');
    }else{
        jQuery('.f1').fadeIn('easing').removeClass('scroll');
    }*/
}) 

jQuery(document).ready(function($) {	
    jQuery(".nash-img-two").twentytwenty();

	jQuery(".modal_close").click(function (i) {
        console.log(jQuery(this).parent().fadeOut(300))
        jQuery('body').css("overflow", "auto");
    })

    jQuery(".close").click(function (i) {
        console.log(jQuery(this).closest(".modal").fadeOut(300))
        jQuery('body').css("overflow", "auto");
    })

    jQuery(".clickme_town").click(function (a) {
        jQuery('.modal_town').fadeIn(300);
        jQuery('body').css("overflow", "hidden");
    })

    jQuery(".clickme_cat").click(function (a) {
        jQuery('.modal_cat').fadeIn(300);
        jQuery('body').css("overflow", "hidden");
    })

    jQuery(".clickme_avtozap").click(function (a) {
        jQuery('.modal_avtozap').fadeIn(300).css("display", "flex");
        jQuery('body').css("overflow", "hidden");
    })

    jQuery(".clickme_poly").click(function (a) {
        jQuery('.modal_poly').fadeIn(300).css("display", "flex");
        jQuery('body').css("overflow", "hidden");
    })

    jQuery(".clickme_in").click(function (a) {
        jQuery('.modal_in').fadeIn(300).css("display", "flex");
        jQuery('body').css("overflow", "hidden");
    })

    jQuery(".clickme_reg").click(function (a) {
        jQuery('.modal_reg').fadeIn(300).css("display", "flex");
        jQuery('body').css("overflow", "hidden");
    })

    jQuery('#signInForm').submit(function(event) {
            event.preventDefault();
        $(this).submit();
    });

    /*
    jQuery(".modal_in_reg").click(function (a) {
        console.log(jQuery(this).closest(".modal").fadeOut(300))
        jQuery('.modal_reg').fadeIn(300).css("display", "flex");
        jQuery('body').css("overflow", "hidden");
    })

     */

    /*$('body').on('click', function(){
        if ($(this).parent().find('#password-input').attr('type') == 'password'){
            $(this).addClass('view');
            $(this).parent().find('#password-input').attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $(this).parent().find('#password-input').attr('type', 'password');
        }
        return false;
    });

     */

    $( ".a1c3_drop" ).click(function() {
      $(this).toggleClass( "active" );  
      $('.a1c3_drop_down').toggleClass( "active" );
    });

    $( ".a1c3_fil" ).click(function() {
      $(this).toggleClass( "active" );  
      $('.a1c3_fil_drop').toggleClass( "active" );
    });

    $( ".list_spis" ).click(function() {
      $(this).addClass( "active" );  
      $('.a1c1_row').addClass( "active" );
      $('.list_map').removeClass( "active" );
      $('.list_map_all').removeClass( "active" );
    });

    $( ".list_map" ).click(function() {
      $(this).addClass( "active" );  
      $('.a1c1_row').removeClass( "active" );
      $('.list_spis').removeClass( "active" );
      $('.list_map_all').addClass( "active" );
    });

    $('.f1c1_item h2').click(function () {
        $(this).toggleClass('active');
        $(this).parent().children('.f1c1_cont').slideToggle(function () {
            $(this).toggleClass('active');
        });
    })

    $('.b1c4_row').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2,
        dots: true,
        arrow: true,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    arrow: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })

    $('.b1c8_row').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 1,
        dots: true,
        arrow: true,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    arrow: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })

    $('.b1c9_row').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        rows: 1,
        dots: true,
        arrow: true,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    arrow: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })

    /*$('.a2c4').on('click', '.a2c3_row1_item:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('.a2c4').find('.a2c3_row2_item').removeClass('active').eq($(this).index()).addClass('active');
    });*/

});	

jQuery(document).ready(function () {
    let mainImages = jQuery(".snac1-img1");
    let additionalImages = jQuery(".snac1-r-item");
    let downRounds = jQuery(".progress_rounds li");
    let numImage = jQuery(".image_num");

    let currentIndex = 0;

    additionalImages[0].className += " active";

    //right images click
    jQuery(document).on("click", ".snac1-r-item", function () {

        let selectedIndex = 0;
        for (let index in additionalImages) {
            additionalImages[index].className = "snac1-r-item";
            if (this == additionalImages[index]){
                selectedIndex = index;
            }
        }

        for (let index in mainImages){
            if (index == selectedIndex){
                mainImages[index].hidden = false;
            }else {
                mainImages[index].hidden = true;
            }
        }

        downRounds.each(function () {
            this.className = "";
        });
        if (selectedIndex < downRounds.length) {
            downRounds[selectedIndex].className = "active";
        }else {
            downRounds[selectedIndex - downRounds.length].className = "active";
        }

        currentIndex = selectedIndex;
        numImage.text(parseInt(currentIndex) + 1);
        this.className = "snac1-r-item active";
    });

    //next
    jQuery(document).on("click", ".snac1-img1-arrow-r", function () {
        currentIndex++;
        if (currentIndex >= mainImages.length){
            currentIndex = 0;
        }

        for (let index in additionalImages) {
            additionalImages[index].className = "snac1-r-item";
        }

        for (let index in mainImages){
            if (index == currentIndex){
                mainImages[index].hidden = false;
            }else {
                mainImages[index].hidden = true;
            }
        }

        downRounds.each(function () {
            this.className = "";
        });
        if (currentIndex < downRounds.length) {
            downRounds[currentIndex].className = "active";
        }else {
            downRounds[currentIndex - downRounds.length].className = "active";
        }


        scrollToElm( box, additionalImages[currentIndex] , 600 );
        numImage.text(currentIndex + 1);
        additionalImages[currentIndex].className = "snac1-r-item active";
    });

    //before
    jQuery(document).on("click", ".snac1-img1-arrow-l", function () {
        currentIndex--;

        if (currentIndex < 0){
            currentIndex = mainImages.length - 1;
        }
        for (let index in additionalImages) {
            additionalImages[index].className = "snac1-r-item";
        }

        for (let index in mainImages){
            if (index == currentIndex){
                mainImages[index].hidden = false;
            }else {
                mainImages[index].hidden = true;
            }
        }

        downRounds.each(function () {
            this.className = "";
        });
        if (currentIndex < downRounds.length) {
            downRounds[currentIndex].className = "active";
        }else {
            downRounds[currentIndex - downRounds.length].className = "active";
        }

        scrollToElm( box, additionalImages[currentIndex] , 600 );
        numImage.text(currentIndex + 1);
        additionalImages[currentIndex].className = "snac1-r-item active";
    });


    var box = document.querySelector('.snac1-r'); // <-- Scroll to here within ".box"


    function scrollToElm(container, elm, duration){
        var pos = getRelativePos(elm);
        scrollTo( container, pos.top , 2);  // duration in seconds
    }

    function getRelativePos(elm){
        var pPos = elm.parentNode.getBoundingClientRect(), // parent pos
            cPos = elm.getBoundingClientRect(), // target pos
            pos = {};

        pos.top    = cPos.top    - pPos.top + elm.parentNode.scrollTop,
            pos.right  = cPos.right  - pPos.right,
            pos.bottom = cPos.bottom - pPos.bottom,
            pos.left   = cPos.left   - pPos.left;

        return pos;
    }

    function scrollTo(element, to, duration, onDone) {
        var start = element.scrollTop,
            change = to - start,
            startTime = performance.now(),
            val, now, elapsed, t;

        function animateScroll(){
            now = performance.now();
            elapsed = (now - startTime)/1000;
            t = (elapsed/duration);

            element.scrollTop = start + change * easeInOutQuad(t);

            if( t < 1 )
                window.requestAnimationFrame(animateScroll);
            else
                onDone && onDone();
        };

        animateScroll();
    }

    function easeInOutQuad(t){ return t<.5 ? 2*t*t : -1+(4-2*t)*t };

});

