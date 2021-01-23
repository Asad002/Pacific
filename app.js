// make header sticky

window.onscroll = function() {myFunction()};
var header = document.getElementById("my-header");
var sticky = 580;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
  }
}
// Video overly for hero
var trailer = document.querySelector('.trailer');
var video = document.querySelector('video');
function toggle(){
trailer.classList.toggle('act');
  video.pause();
  video.currentTime = 0;
}

instance = new dtsel.DTS('input[name="dateTimePicker"]');
instance = new dtsel.DTS('input[name="dateTimePicker2"]');
instance = new dtsel.DTS('input[name="dateTimePicker3"]');
instance = new dtsel.DTS('input[name="dateTimePicker4"]');
var swiper = new Swiper('.first-slider', {
  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }
});
var swiper = new Swiper('.second-slider', {
  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});
// responsive menu on, click

var menuTrigger = document.querySelector('.menu-trigger');
var menuContainer = document.querySelector('.site-menu-container');
menuTrigger.addEventListener('click',function(){
  menuContainer.classList.toggle('transition');
})