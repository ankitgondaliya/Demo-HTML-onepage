$(document).ready(function() {
    //stickey header js
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
            $('.main-header').addClass("sticky");
        } else {
            $('.main-header').removeClass("sticky");
        }
    });

    // add return to top arrow
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
            $('.scrollToTop').fadeIn(200); // Fade in the arrow
            $('.scrollToTop').addClass("active");
        } else {
            $('.scrollToTop').fadeOut(200); // Else fade out the arrow
            $('.scrollToTop').removeClass("active");
        }
    });
    $('.scrollToTop').click(function() { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    });
    $('.navbar-toggler').click(function() {
        $(this).toggleClass('open');
    });
    $(".navbar-toggler").click(function() {
        $(".navbar-collapse").toggleClass("active");
    });

    // add section wise scrolling
    $('.down-arrow img').click(function() {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            scrollTop: $($target.offset().top - 250)
        }, 300);
        return false;
    });

    //aboutus slick slider
    $('.aboutus-slider').slick({
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            infinite: false,
            arrows: true,
            autoplay: false,  
            prevArrow: $(".news__arrow_dir_left"),
            nextArrow:$(".news__arrow_dir_right"),
    }); 

     /*on page scroll animation */
     AOS.init({
        duration: 1200,
    })

});

    

/*section on scroll */
var scrollTrigger= $("*[scroll-trigger]");
    scrollTrigger.bind('click', function(e) {
        e.preventDefault(); 
        var _this = $(this); 
        var triggerAttr = _this.attr('scroll-trigger'); 
        var scrollTarget = $('*[scroll-target='+triggerAttr+']'); 
        
        $('html, body').stop().animate({
                scrollTop: scrollTarget.offset().top - 150
        }, 100 );
        return false;
});   

const sections = document.querySelectorAll("section[id]");
// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter(e) {
    // ev.preventDefault();
     e.preventDefault();
  
  let scrollY = window.pageYOffset;
  var _this = $(this); 
        var triggerAttr = _this.attr('href'); 
        var scrollTarget = $('*[href='+triggerAttr+']'); 
console.log('scrollTarget',scrollTarget);
 // Now we loop through sections to get height, top and ID values for each
 sections.forEach(current => {
   
     const sectionHeight = current.offsetHeight;
     const sectionTop = current.offsetTop - 250;
     sectionId = current.getAttribute("id");
    
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}