import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperCard(swiperClass) {
    const swiper = new Swiper(swiperClass, {
        direction: "horizontal",
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 9,
        pagination: {
            el: ".swiper-pagination",
            clickable: false,
            setWrapperSize: false,
        },
    });
}

function addSwiperBrands() {
    let gridContainer = document.querySelector(".brands__content");
    let brandSwiper = document.querySelector(".brands__swiper");
    brandSwiper.style.display = "block";
    let brandSwiperWrapper = document.querySelector(".brands__swiper-wrapper");
    let gridChildren = Array.from(document.getElementsByClassName("brands__tab__button"));
    gridChildren.forEach(function (elem) {
        elem.classList.remove("brands__tab__button--hidable");
        elem.classList.add("swiper-slide");
        brandSwiperWrapper.appendChild(elem);
    });
    gridContainer.remove();
    swiperCard(".brands__swiper");
}

function addSwiperDevices() {
    let gridContainer = document.querySelector(".devices__content");
    let devicesSwiper = document.querySelector(".devices__swiper");
    devicesSwiper.style.display = "block";
    let deviceSwiperWrapper = document.querySelector(".devices__swiper-wrapper");
    let gridChildren = Array.from(document.getElementsByClassName("devices__tab__button"));
    gridChildren.forEach(function (elem) {
        elem.classList.remove("devices__tab__button--hidable");
        elem.classList.add("swiper-slide");
        elem.style.margin = "0";
        deviceSwiperWrapper.appendChild(elem);
    });
    gridContainer.remove();
    swiperCard(".devices__swiper");
}
function addSwiperPrices(){
    let pricesTable = document.querySelector(".prices__table");
    pricesTable.style.display = "none";
    let pricesSwiper = document.querySelector(".prices__swiper");
    pricesSwiper.classList.remove("prices__swiper__hidable");
    swiperCard(".prices__swiper");
}

window.addEventListener("load", (event) => {
    if (window.innerWidth <= 400) {
        addSwiperBrands();
        addSwiperDevices();
        addSwiperPrices();
    }
});

