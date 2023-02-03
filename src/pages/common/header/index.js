// 头部的js代码
import "./index.less";
import "wowjs/css/libs/animate.css";
import {WOW} from "wowjs";

new WOW().init();

$(".language-show").on("click", function(){
  $(this).next(".language-list").slideToggle();
  $(this).find(".icon").toggleClass("show");
})

$(".menu-btn").on("click", function(){
  $(".nav-list").slideToggle();
})

