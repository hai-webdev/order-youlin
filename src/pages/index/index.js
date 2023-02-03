// 首页使用的js
import "swiper/css/swiper.min.css";
// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";

import Swiper from "swiper";

import {WOW} from "wowjs";

new WOW().init();

const viewWidth = $(".number-container .center-layout").outerWidth(true);
if(viewWidth > 768){
    const centerWidth = $(".number-container .center-layout").outerWidth();
    const leftHeight = $(".number-container .center-layout .left-layout").outerHeight();
    const leftWidth = $(".number-container .center-layout .left-layout").outerWidth();
    const rightWidth = centerWidth - leftWidth;
    const marginRight = (viewWidth - centerWidth) / 2;
    const resultWidth = rightWidth + marginRight;
    $(".number-container .right-layout").css({
        width:resultWidth + 'px',
        height: leftHeight + "px"
    })
}


const numberSwiper = new Swiper(".number-swiper",{
    loop: true,
    pagination:{
        el:".swiper-pagination",
        clickable: true
    }
})
const teamSwiper = new Swiper(".team-swiper",{
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1080: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    // slidesPerGroup: 4,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
})

const dots =  $(".dots .dot");
for (let i = 0; i < dots.length; i++) {
    const el = dots.eq(i);
    const x = el.data("x");
    const y = el.data("y");
    el.css({
        left: x,
        top: y
    })
    
}

