$(function() {
  var scrollCount = 0;
  var currentPhase = 1;
  var scrollDirections = {
       Down: "Down",
       Up: "Up"
  };
  

// --------------------------------------------------------------------------
//  opening
});var general = {
    init: function () {
        general.cover();
        general.carousel();
        general.ancor_link();
    },
  
    cover:function() {
      $('.open_invitation').on('click', function(){
        $(this).parent().parent().parent().slideUp("fast");
        $('body').removeClass('overclosed');
      })
    },
  
    carousel:function() {
      $('.owl-carousel').owlCarousel({
        margin:0,
        nav:true,
        loop:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
      })
    },
    //   opening
    ancor_link: function() {
      var lastId,
      topMenu = $("#bot-menu"),
      topMenuHeight = topMenu.outerHeight()+15,
  
      menuItems = topMenu.find("a"),
  
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });
  
      $('.nav-link').on('click', function(){
        $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
      });
  
      $(window).scroll(function(){
        var fromTop = $(this).scrollTop()+topMenuHeight;
  
        var cur = scrollItems.map(function(){
          if ($(this).offset().top < fromTop)
            return this;
        });
  
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
  
        if (lastId !== id) {
            lastId = id;
  
            menuItems
              .parent().removeClass("active")
              .end().filter("[href='#"+id+"']").parent().addClass("active");
        }
     });
    },
  }
  

  $(document).ready(function () {
    $('body').addClass('overclosed');
    $("html, body").animate({ scrollTop: 0 }, "fast");
    AOS.init();
    general.init()
  })






  // TIME

const countdown = () => {
    const countDate = new Date('November 13, 2022 18:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
  
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
  
    const textDay = Math.floor(gap / day),
      textHour = Math.floor((gap % day) / hour),
      textMinute = Math.floor((gap % hour) / minute),
      textSecond = Math.floor((gap % minute) / second);
  
    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
  };
  
  setInterval(countdown, 1000);
  

//   music
document.addEventListener("DOMContentLoaded",()=>{var n=1;const t=new Plyr("#player");function i(){1==n&&t.play()}window.player=t,$(".open_invitation").click(function(){t.play()}),window.addEventListener("touchstart",function(n){i()}),window.addEventListener("scroll",function(n){i()}),$(".btn-play-pause").click(function(){0==n?(t.play(),n=1):(t.pause(),n=0)}),$(".open_invitation").click(function(){i()})});



// animasi //

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);









// loaing page

  $(window).on('load', function () {
    $('#loading').hide();
  }) 

