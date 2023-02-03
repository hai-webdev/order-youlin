// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";

import {WOW} from "wowjs";

new WOW().init();
const viewWidth = $(".contact-container").outerWidth(true);
if(viewWidth > 1080){
const view2 = $(".contact-container").outerWidth() / 2;
$(".right-layout .map").css({
    width: view2 + 'px'
})
}