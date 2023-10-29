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
//
