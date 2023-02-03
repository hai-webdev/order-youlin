// 页尾的js代码
import "./index.less";
import {WOW} from "wowjs";

new WOW().init();

const bannerHeight = $(".banner-container").height();
headerIsHover();
function headerIsHover(){
    const scrollTop = $(window).scrollTop();
    if(scrollTop > bannerHeight){
        $(".pc-header").addClass("hover")
    }else{
        console.log(2);
        $(".pc-header").removeClass("hover");
    }
}
$(window).scroll(function(){
    headerIsHover();
})