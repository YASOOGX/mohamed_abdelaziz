// // //////load
let load = document.querySelector(".load");
window.onload = function () {
  load.style.display = "none";
  document.body.style.overflowY = "auto";
};

// // start header
let links = document.querySelector(".links");
let number = document.querySelector(".number");
let phone_page = document.querySelector(".phone-page");
let phone = document.querySelector(".phone");
let bar_button = document.querySelector(".bar");
let closes = document.querySelector(".closes");

bar_button.onclick = function () {
  bar_button.classList.add("none");
  setTimeout(() => {
    phone.style.left = "3%";
  }, 100);
phone_page.classList.add("block");
};
closes.onclick = function () {
  links.classList.remove("flex");
  number.classList.remove("flex");
  setTimeout(() => {
    bar_button.classList.remove("none");
  }, 1500);
  phone.style.left = "-100%";
  setTimeout(() => {
    phone_page.classList.remove("block");
  }, 2000);
};
let header = document.querySelector("header");
header.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
let contact =document.querySelector(".contact")
contact.onclick=function(){
  social.classList.toggle("left");
  social_icon.classList.toggle("transfor");
  
}
// /////////////////////////////////////


window.onscroll = function () {
  if (scrollY >= 650) {
    header.classList.add("header-fixed");
  } else {

    header.classList.remove("header-fixed");
  }
};

let ani5 =document.querySelector(".sale .zom")
let ani6 =document.querySelector(".sale .zom2")
let ani7 =document.querySelector(".sale .zom3")
let ani8 =document.querySelector(".sale .zom4")
let ani9 =document.querySelector(".sale .zom5")
let ani2 =document.querySelector(".autoplay2")
let ani3 =document.querySelector(".info .right")
let ani4 =document.querySelector(".info .left")
if(screen.width<= 768 ){
  ani5.dataset.aos="zoom-in"
  ani6.dataset.aos="zoom-in"
  ani7.dataset.aos="zoom-in"
  ani8.dataset.aos="zoom-in"
  ani9.dataset.aos="zoom-in"
  ani2.dataset.aos="zoom-in"
  ani3.dataset.aos="zoom-in"
  ani4.dataset.aos="zoom-in"
}
// // plugins
$(".autoplay")
  .slick({
    
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2300,
  })
  .slickAnimation();
////autoplay 2
if (screen.width <= 350) {
  $(".autoplay2").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2300,
  });
}
 else if (screen.width <= 768) {
  $(".autoplay2").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2300,
  });
}
else if (screen.width <= 991) {
  $(".autoplay2").slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2300,
  });
}
else if (screen.width >= 991) {
  $(".autoplay2").slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2300,
  });
}
// end slider
////////////////////////
// start animation scroll

AOS.init();
// end animation scroll
//////////////////////////////
// // start auto type
let type = ["مدرب اونلاين"];
const exampleTyping = new AutoTyping(".auto", type, {
  typeSpeed: 100,
  deleteSpeed: 100,
  waitBeforeDelete: 2000,
  waitBetweenWords: 500,
});
exampleTyping.start();
// // end auto type
// ///////////////////////////////
// start card 
var limits = 15.0;

$(".card").mousemove(function (e) {
  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left; //x position within the element.
  var y = e.clientY - rect.top; //y position within the element.
  var offsetX = x / rect.width;
  var offsetY = y / rect.height;

  var rotateY = (offsetX) * (limits * 2) - limits;
  var rotateX = (offsetY) * (limits * 2) - limits;

  var shadowOffsetX = (offsetX) * 32 - 16;
  var shadowOffsetY = (offsetY) * 32 - 16;

  $(this).css({
    "box-shadow": (1 / 6) * -shadowOffsetX + "px " + (1 / 6) * -shadowOffsetY + "px 3px rgba(0, 0, 0, 0.051), " +
      (2 / 6) * -shadowOffsetX + "px " + (2 / 6) * -shadowOffsetY + "px 7.2px rgba(0, 0, 0, 0.073), " +
      (3 / 6) * -shadowOffsetX + "px " + (3 / 6) * -shadowOffsetY + "px 13.6px rgba(0, 0, 0, 0.09), " +
      (4 / 6) * -shadowOffsetX + "px " + (4 / 6) * -shadowOffsetY + "px 24.3px rgba(0, 0, 0, 0.107), " +
      (5 / 6) * -shadowOffsetX + "px " + (5 / 6) * -shadowOffsetY + "px 45.5px rgba(0, 0, 0, 0.129), " +
      -shadowOffsetX + "px " + -shadowOffsetY + "px 109px rgba(0, 0, 0, 0.18)",
    transform: "perspective(1000px) rotateX(" + -rotateX + "deg) rotateY(" + rotateY + "deg)"
  });

  var glarePos = rotateX + rotateY + 90;
  $(this)
    .children()
    .children()
    .css("left", glarePos + "%");
});

$(".card").mouseleave(function (e) {
  $(".card").css({"box-shadow": "0px 0px 3px rgba(0, 0, 0, 0.051), 0px 0px 7.2px rgba(0, 0, 0, 0.073), 0px 0px 13.6px rgba(0, 0, 0, 0.09), 0px 0px 24.3px rgba(0, 0, 0, 0.107), 0px 0px 45.5px rgba(0, 0, 0, 0.129), 0px 0px 109px rgba(0, 0, 0, 0.18)", "transform": "scale(1.0)"});
  $(".glare").css("left", "100%");
});

// end card 
// start social-media
let social=document.querySelector(".social-media ")
let social_icon=document.querySelector(".social-media button i ")
let btn_social=document.querySelector(".social-media button")
btn_social.onclick=function(){
social.classList.toggle("left");
social_icon.classList.toggle("transfor");


}


