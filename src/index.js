import './index.html';
import './index.scss';
import * as menu from "./modules/menu.js";
import * as hideShow from "./modules/hideShow.js";
import * as swiperModule from "./modules/swiper.js";
// menu
let menuShowButton = document.querySelector("#btn-menu-show");
menuShowButton.onclick = menu.menuShow;
let menuCloseButton = document.querySelector("#btn-menu-close");
menuCloseButton.onclick = menu.menuClose;
let feedbackShowButton = document.querySelector("#menu__feedback");
feedbackShowButton.onclick = menu.feedbackShow;
let feedbackCloseButton = document.querySelector("#btn-feedback-close");
feedbackCloseButton.onclick = menu.feedbackClose;
let callShowButton = document.querySelector("#menu__call");
callShowButton.onclick = menu.feedbackShow;
let callCloseButton = document.querySelector("#btn-call-close");
callCloseButton.onclick = menu.feedbackClose;