import './jquerry/jquery-3.6.0.min.js'

import LoginClass from './Login.js'

//let nav = document.getElementById("logo");

//addEventListener('scroll', function() {
  //let value = window.scrollY;

  //logo.style.marginTop = value * 1.0 + 'px';
 // console.log('data',value);
 //})

 $(window).scroll(function () {
  const scroll = $(window).scrollTop();
  const dh = $(document).height();
  const wh = $(window).height();
  const scrollpercent = (scroll / (dh - wh)) * 100;
  $('#scrolbar').css("height", scrollpercent + '%')
})


